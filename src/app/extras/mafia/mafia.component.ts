import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-mafia',
  templateUrl: './mafia.component.html',
  styleUrls: ['./mafia.component.scss']
})
  export class MafiaComponent implements OnInit {
  
  playerName: string = '';
  private route = inject(ActivatedRoute);
  socketId: string = '';
  socketService = inject(SocketService);
  isParam: boolean = false
  isJoined: boolean = false;
  isStarted: boolean = false;
  users: any[] = [];
  myUser: any = null;
  ngOnInit() {
    this.socketService.onMSG4Mafia((message: any) => {
      this.socketId = message.roomId || '';
      if(message.users){
        this.users = message.users;
        this.myUser = message.users.find((user: any) => user.username === this.playerName);
        if(this.myUser.type == 'none') this.isStarted = true
      }
      console.log('Received message from server:', message);
    });

   
    this.route.paramMap.subscribe(params => {
      this.socketId = params.get('socketId') || '';
      this.isParam = this.socketId.length > 0;
    });
  }

  startGame(){
    if(this.socketId.length === 0){
       this.socketService.sendMSG4Mafia({ type: 'createRoom', text: 'Player joined the game', show: true, mode: 'mafia', username: this.playerName }); 
      }else if(!this.isStarted){
       this.socketService.sendMSG4Mafia({ type: 'joinRoom', text: this.socketId, show: true, mode: 'mafia', username: this.playerName, socketId: this.socketId }); 
    }else {
       this.socketService.sendMSG4Mafia({ type: 'startGame', text: this.socketId, show: true, mode: 'mafia', username: this.playerName, socketId: this.socketId }); 
    }
      this.isJoined = true;
  }
}