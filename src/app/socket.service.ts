// socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';


@Injectable({ providedIn: 'root' })
export class SocketService {
    private socket: Socket;

    constructor(
      
    ) {
        this.socket = io('https://www.zagadka42.pl'); // Connect to Socket.IO server
    }

    // Method to send message to the server
    sendMSG4Mafia(message: any): void {
        this.socket.emit('extra_Mafia', message);
    }

    // Observable to receive messages from the server
    onMSG4Mafia(callback: (message: message) => void): void {
        this.socket.on('extra_Mafia', callback);
    }
}
export interface message {
    type: string,
    text: string,
    show: boolean,
    mode: string,
    username?: string,
}