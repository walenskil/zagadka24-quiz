import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mafia',
  templateUrl: './mafia.component.html',
  styleUrls: ['./mafia.component.scss']
})
  export class MafiaComponent implements OnInit {
  
  playerName: string = '';
  private route = inject(ActivatedRoute);
  socketId: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.socketId = params.get('socketId');
    });
  }

  startGame(){

  }
}