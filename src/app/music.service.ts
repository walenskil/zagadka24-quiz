// music.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { debounceTime, map, Observable } from 'rxjs';

export interface QuizTrack {
  trackName: string;
  artistName: string;
  previewUrl: string;
  releaseDate: string;
  dragable: boolean;
  isWrong: boolean;
}

export interface players {
  playerName: string;
  songList: QuizTrack[];
  goodAnswers: number;
  playedRound: boolean;
  wins: number[]
}

interface ItunesResponse {
  resultCount: number;
  results: QuizTrack[];
}

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://itunes.apple.com/search';

  private audio: HTMLAudioElement | null = null;
  private stopTimeout: any;

  // Pobiera listę utworów (np. po nazwie artysty, gatunku lub tytule)
  searchTracks(term: string, country: string): Observable<QuizTrack[]> {
    const params = new HttpParams()
      .set('term', term)
      .set('country', country)
      .set('entity', 'song')
      .set('limit', 5);

    return this.http
      .get<ItunesResponse>(this.API_URL, { params, headers: {} })
      .pipe(
        debounceTime(1000),
        // Filtrujemy tylko te wyniki, które faktycznie mają link do audio
        map((response) =>
          response.results.filter((track) => !!track.previewUrl),
        ),
      );
  }

  // Odtwarza 15-sekundowy fragment
  play15Seconds(previewUrl: string, onEnded?: () => void): void {
    this.stopAudio(); // Zatrzymaj poprzedni utwór, jeśli gra

    this.audio = new Audio(previewUrl);
    this.audio.volume = 0.8;

    // Opcjonalnie: start od 5. sekundy, żeby ominąć ciszę na początku
    this.audio.currentTime = 5;

    this.audio.play().catch((err) => console.error('Błąd odtwarzania:', err));

    // Zatrzymaj dokładnie po 15 sekundach (15000 ms)
    this.stopTimeout = setTimeout(() => {
      this.stopAudio();
      if (onEnded) onEnded();
    }, 15000);
  }

  // Ręczne zatrzymanie dźwięku (np. po kliknięciu odpowiedzi przez gracza)
  stopAudio(): void {
    if (this.stopTimeout) {
      clearTimeout(this.stopTimeout);
    }
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }
}
