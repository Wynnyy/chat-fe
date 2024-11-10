import {Injectable} from '@angular/core';

import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import {ChatMessage} from '../model/ChatMessage'
import {Message} from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  // @ts-ignore
  private stompClient: Stomp.Client;
  public messages: string[] = [];

  private chatMessage: ChatMessage | undefined;


  constructor() {
    this.connect();
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame: any) => {
      // console.log('Connected: ' + frame);
      this.subscribeToMessages();
    });
  }


  subscribeToMessages() {
    this.stompClient.subscribe('/topic/message', (message: Message) => {
      this.chatMessage = JSON.parse(message.body);
      this.messages.push(<string>this.chatMessage?.message);
    });
  }

  sendMessage(message: ChatMessage, room : string) {
    // console.log("***" + JSON.stringify(message));
    this.stompClient.send('/app/send/' + room, {'content-type': 'application/json'}, JSON.stringify(message));
  }
}
