import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  email = '';
  termsAccepted = false;

  public emailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  ngOnInit(): void {
    this.goToLastestQuestion();
  }

  public openRegulamin(): void {
    this.router.navigate(['/regulamin']);
  }

  public goToLastestQuestion() {
    setTimeout(() => {
      if(localStorage.getItem('FinishQuiz'))
        this.router.navigate(['/koniec']);
      else if(localStorage.getItem('latestQuestion')) 
        this.router.navigate(['/quiz']);
    }, 0);
  }

  public startQuiz(): void {
    if (this.canStart) {
     localStorage.setItem('email', this.email);
     this.router.navigate(['/quiz'], { queryParams: { email: this.email } });
    } 
  }

  get canStart(): boolean {
    return this.emailValid() && this.termsAccepted;
  }
}
