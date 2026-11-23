import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { MusicService, players, QuizTrack } from 'src/app/music.service';
import { musicList } from './musicList';

@Component({
  selector: 'app-music-app',
  templateUrl: './music-app.component.html',
  styleUrl: './music-app.component.scss',
})
export class MusicAppComponent {
  private musicService = inject(MusicService);

  isWinner = false
  winners: players[] = [];
  playerName = '';
  isGameStart = false;
  canNextPlayer = false;
  playerIndex = 0;
  playersList: players[] = [];
  win = 10  
  tracks: QuizTrack[] = [];
  currentTrack: QuizTrack | null = null;
  isPlaying = false;
  isVerificated = true;
  iL: number[] = [];
  round = 1

  addPlayer() {
    this.playersList.push({
      playerName: this.playerName,
      songList: [
        {
          artistName: 'Start',
          dragable: false,
          previewUrl: '',
          releaseDate:
            1970 + Math.floor(Math.random() * (2010 - 1970)) + '-01-01',
          trackName: '',
          isWrong: false,
        },
      ],
      wins: [],
      playedRound: false,
      goodAnswers: 0
    })

    this.playerName = ''
  }

  nextPlayer() {
    this.playersList[this.playerIndex].playedRound = true
    this.playerIndex++;
    if (this.playerIndex == this.playersList.length) {
      this.round++
      this.playerIndex = 0
      this.playersList.forEach(p=> p.playedRound = false)
      this.checkWin()
    };
    this.canNextPlayer = false;
  }

  OdNowa(){
    this.round = 1
    this.playerIndex = 0
    this.isGameStart = true
    this.isPlaying = false
    this.playersList.forEach(p=> {
      p.goodAnswers = 0
      p.playedRound = false
      p.songList = [
        {
          artistName: 'Start',
          dragable: false,
          previewUrl: '',
          releaseDate:
            1970 + Math.floor(Math.random() * (2010 - 1970)) + '-01-01',
          trackName: '',
          isWrong: false,
        },
      ]
    })
    this.isWinner = false
    this.winners = []
  }

  reload(){
    window.location.reload()
  }

  checkWin(){
    if(this.playersList.some(e => e.goodAnswers == this.win)){
      this.isWinner = true
      this.winners = this.playersList.filter(p => p.goodAnswers == this.win)
      this.playersList.forEach(p =>{
        if(p.goodAnswers == this.win)
          p.wins.push(1)
      })
    }
  }

  confirm() {
    this.stop();    
    let check = this.playersList[this.playerIndex].songList.every(
      (item, index) => {
        if (index === 0) return true;
        return (
          item.releaseDate <=
          this.playersList[this.playerIndex].songList[index - 1].releaseDate
        );
      },
    );
    let i = this.playersList[this.playerIndex].songList.findIndex(
      (e) =>
        e.artistName == this.currentTrack?.artistName &&
        e.trackName == this.currentTrack.trackName,
    );

    if (!check) {
      this.isVerificated = false;
      this.playersList[this.playerIndex].songList[i].dragable = false;
      this.playersList[this.playerIndex].songList[i].isWrong = true;
      
      setTimeout(() => {
        this.isVerificated = true;
        this.playersList[this.playerIndex].songList.splice(i, 1);
        this.canNextPlayer = true;
      }, 3000);
    } else {
      this.playersList[this.playerIndex].goodAnswers++;
      this.playersList[this.playerIndex].songList[i].dragable = false;
      this.canNextPlayer = true;
      this.isVerificated = true;
    }
  }

  getMusic() {
    let title = '';
    let i = Math.floor(Math.random() * musicList.length);

    do i = Math.floor(Math.random() * musicList.length);
    while (this.iL.includes(i));
    this.iL.push(i);
    title = musicList[i].tytuł + ' ' + musicList[i].wykonawca;
    this.loadTracks(
      title,
      musicList[i].origin == 'polski' ? 'PL' : 'US',
      musicList[i].rok,
    );
  }

  loadTracks(title: string, country: string, year: number): void {
    this.musicService.searchTracks(title, country).subscribe((tracks) => {
      this.tracks = [
        {
          artistName: tracks[0].artistName,
          previewUrl: tracks[0].previewUrl,
          trackName: tracks[0].trackName,
          releaseDate: year + '01-01',
          dragable: false,
          isWrong: false
        },
      ];
      this.playCurrent();
    });
  }

  left(text: string | undefined) {
    if (text == undefined) return;
    return text.substring(0, 4);
  }

  playCurrent(): void {
    this.isVerificated = false;
    this.isPlaying = true;
    do this.currentTrack = this.tracks[0] || null;
    while (
      this.playersList[this.playerIndex].songList.includes(this.currentTrack)
    );
    this.playersList[this.playerIndex].songList.forEach(
      (e) => (e.dragable = false),
    );
    this.currentTrack.dragable = true;
    this.playersList[this.playerIndex].songList.unshift(this.currentTrack);
    if (!this.currentTrack) { this.isPlaying = false; return;};
    this.isPlaying = true;

    this.musicService.play15Seconds(this.currentTrack.previewUrl, () => {
      this.isPlaying = false;
    });
  }

  stop(): void {
    this.musicService.stopAudio();
    this.isPlaying = false;
  }

  drop(event: any) {
    moveItemInArray(
      this.playersList[this.playerIndex].songList,
      event.previousIndex,
      event.currentIndex,
    );
  }

  ngOnDestroy(): void {
    this.musicService.stopAudio();
  }
}
