import { Component, OnInit } from '@angular/core';
import { qeuestions } from './pytania';
@Component({
  selector: 'app-tabu',
  templateUrl: './tabu.component.html',
  styleUrls: ['./tabu.component.scss'],
})
export class TabuComponent implements OnInit{
  inProgress = false;
  questions = qeuestions;
  los = 0;
  wykorzystane: Array<number> = [0];
  timer = 60
  showZmiana = false
  teamPlaying = 0
  timeLeft = new Date().setHours(0, 0, this.timer, 99);
  isTimeRunning = false
  isBegin = true

  countDown() {
    this.isBegin = false
    let cd = setInterval(() => {
      this.timeLeft = this.timeLeft - 1000; // Subtract 1 second in milliseconds
      console.log(new Date(this.timeLeft).getSeconds())
      if(new Date(this.timeLeft).getSeconds() <= 0){
        clearInterval(cd);
        
        this.isTimeRunning = !this.isTimeRunning
      }
    }, 1000);
  }

  ngOnInit(): void {

  }

  losujPytanie() {
    if(!this.isTimeRunning){
      this.teamPlaying = (this.teamPlaying+1)%2
      this.timeLeft = new Date().setHours(0, 0, this.timer, 99);
      this.countDown()
      this.isTimeRunning = !this.isTimeRunning
    }
    do {
      this.los = Math.floor(Math.random() * qeuestions.length);
    } while (this.wykorzystane.includes(this.los));

    this.wykorzystane.push(this.los);
    
  }
}
