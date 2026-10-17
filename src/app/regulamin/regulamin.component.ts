import { Component } from '@angular/core';

@Component({
  selector: 'app-regulamin',
  templateUrl: './regulamin.component.html',
  styleUrls: ['./regulamin.component.scss']
})
export class RegulaminComponent {

  goBack(): void {
    window.history.back();
  }
}
