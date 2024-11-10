import {Component, ElementRef, ViewChild} from '@angular/core';
import {WebSocketService} from '../../service/web-socket.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {ChatMessage} from '../../model/ChatMessage'
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NavBarComponent,
    RouterLink
  ],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  @ViewChild('scrollWindow') scrollWindow!: ElementRef<HTMLDivElement>
  message: string = '';

  public readonly chatMessage: ChatMessage = {
    id: 1,
    created: new Date(),
    updated: new Date(),
    chatId: 'string',
    senderId: 'string',
    recipientId: 'string',
    message: 'string',
  };

  constructor(public webSocketService: WebSocketService) {
  }

  send() {
    this.chatMessage.message = this.message;
    this.webSocketService.sendMessage(this.chatMessage,'1');
    this.message = '';
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.scrollWindow!.nativeElement.scrollTo(0, this.scrollWindow!.nativeElement.scrollHeight);
  }


}
