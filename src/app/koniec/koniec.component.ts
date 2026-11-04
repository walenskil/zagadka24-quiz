import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-koniec',
  templateUrl: './koniec.component.html',
  styleUrls: ['./koniec.component.scss']
})
export class KoniecComponent {

    constructor(private router: Router) { }
  
    email = localStorage.getItem('email') || '';
    termsAccepted = false;

}
