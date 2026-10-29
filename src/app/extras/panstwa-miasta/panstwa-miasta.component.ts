import { Component } from '@angular/core';

@Component({
  selector: 'app-panstwa-miasta',
  templateUrl: './panstwa-miasta.component.html',
  styleUrls: ['./panstwa-miasta.component.scss'],
})
export class PanstwaMiastaComponent {
  char = '-';
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
  interval: any;
  index = 0;
  inProgress = false;
  counter = 0;
  get rows() {
    const size = 6;
    const result = [];

    for (let i = 0; i < this.tablicaZnakow.length; i += size) {
      result.push(this.tablicaZnakow.slice(i, i + size));
    }

    return result;
  }

  stop() {
    if (this.inProgress) {
      clearInterval(this.interval);
      while (this.tablicaZnakow[this.index].used) {
        this.index = (this.index + 1) % this.tablicaZnakow.length;
      }
      this.inProgress = false;
      this.char = this.tablicaZnakow[this.index].name;
      this.interval = null;
      this.tablicaZnakow[this.index].used = true;
      this.counter += 1;
      if (this.counter == this.tablicaZnakow.length) {
        this.tablicaZnakow.forEach((e) => (e.used = false));
      }
    }
  }

  losujLiterke() {
    this.char = 'X';
    setTimeout(() => {
      this.char = 'Y';
    }, 700);
    setTimeout(() => {
      this.char = 'Z';
    }, 1400);
    setTimeout(() => {
      this.char = 'A';
      this.inProgress = true;
      this.interval = setInterval(() => {
        this.char = this.tablicaZnakow[this.index].name;
        this.index = (this.index + 1) % this.tablicaZnakow.length;
      }, 50);
    }, 2100);
  }
}
