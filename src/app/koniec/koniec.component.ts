import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-koniec',
  templateUrl: './koniec.component.html',
  styleUrls: ['./koniec.component.scss']
})
export class KoniecComponent {

    constructor(private router: Router) { }
  
    email = '';
    termsAccepted = false;
  
    public emailValid(): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    }
  
    public openRegulamin(): void {
      this.router.navigate(['/regulamin']);
    }
  
    public startQuiz(): void {
      if (this.canStart) {
       this.router.navigate(['/quiz'], { queryParams: { email: this.email } });
      } 
    }
  
    get canStart(): boolean {
      return this.emailValid() && this.termsAccepted;
    }
}
