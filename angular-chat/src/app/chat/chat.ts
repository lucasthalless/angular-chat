import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../models/message.model';
import { MessageBubbleComponent } from './message-bubble/message-bubble';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class ChatComponent {
  messageStr: string = ''
  messages: Message[] = [
    {
      id: '1',
      content: 'Olá! Como posso te ajudar hoje?',
      role: 'assistant',
      timestamp: new Date()
    },
    {
      id: '2',
      content: 'Quero saber o saldo da minha conta.',
      role: 'user',
      timestamp: new Date()
    },
    {
      id: '3',
      content: 'Claro! Seu saldo atual é R$ 1.313,00.',
      role: 'assistant',
      timestamp: new Date()
    }
  ];
}