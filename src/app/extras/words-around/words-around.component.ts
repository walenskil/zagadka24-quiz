import { Component } from '@angular/core';
import { categories } from './categories';

@Component({
  selector: 'app-words-around',
  templateUrl: './words-around.component.html',
  styleUrls: ['./words-around.component.scss'],
})
export class WordsAroundComponent {
  categories = categories;
  category = '-';
  timer = 15;
  timeLeft = new Date().setHours(0, 0, this.timer, 99);
  isTimeRunning = false;
  isBegin = true;
  cd: any;

  countDown() {
    this.isBegin = false;

    this.cd = setInterval(() => {
      this.timeLeft = this.timeLeft - 1000; // Subtract 1 second in milliseconds
      if (new Date(this.timeLeft).getSeconds() <= 0) {
        this.isTimeRunning = false;
        clearInterval(this.cd);
      }
    }, 1000);


  }

  get rows() {
    const size = 6;
    const result = [];
    for (let i = 0; i < this.tablicaZnakow.length; i += size) {
      result.push(this.tablicaZnakow.slice(i, i + size));
    }
    return result;
  }

  tablicaZnakow = [
    { name: 'A', index: 0, used: false },
    { name: 'B', index: 1, used: false },
    { name: 'C', index: 2, used: false },
    { name: 'D', index: 3, used: false },
    { name: 'E', index: 4, used: false },
    { name: 'F', index: 5, used: false },
    { name: 'G', index: 6, used: false },
    { name: 'H', index: 7, used: false },
    { name: 'I', index: 8, used: false },
    { name: 'J', index: 9, used: false },
    { name: 'K', index: 10, used: false },
    { name: 'L', index: 11, used: false },
    { name: 'M', index: 12, used: false },
    { name: 'N', index: 13, used: false },
    { name: 'O', index: 14, used: false },
    { name: 'P', index: 15, used: false },
    { name: 'R', index: 16, used: false },
    { name: 'S', index: 17, used: false },
    { name: 'T', index: 18, used: false },
    { name: 'U', index: 19, used: false },
    { name: 'W', index: 20, used: false },
    { name: 'Z', index: 21, used: false },
  ];

  resetTimer() {
    this.timeLeft = new Date().setHours(0, 0, this.timer, 99);    
    if(this.tablicaZnakow.every(e=> e.used)){
      clearInterval(this.cd);
      this.isTimeRunning = false
      this.isBegin = true
    }
  }

  getNewCategory() {
    if (!this.isTimeRunning) {
      this.isTimeRunning = true
      clearInterval(this.cd);
      this.category =
        this.categories[Math.floor(Math.random() * categories.length)];
      this.timeLeft = new Date().setHours(0, 0, this.timer, 99);
      this.tablicaZnakow.forEach((e) => (e.used = false));
      this.countDown();
    }
  }
}
