import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ichat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ichat.component.html',
  styleUrls: ['./ichat.component.scss'],
})
export class IchatComponent {
  message: string = '';

  // Lista de contactos
  contacts = [
    {
      name: 'Carlos',
      online: true,
      lastMessage: '¡Hola! ¿Cómo estás?',
      unreadCount: 2,
      lastMessageTime: '10:05 AM',
    },
    {
      name: 'María',
      online: false,
      lastMessage: '¡Hola! Estoy bien, gracias. ¿Y tú?',
      unreadCount: 0,
      lastMessageTime: '9:45 AM',
    },
    {
      name: 'Luis',
      online: true,
      lastMessage: 'Todo bien, gracias 😊',
      unreadCount: 1,
      lastMessageTime: '10:07 AM',
    },
    {
      name: 'Ana',
      online: true,
      lastMessage: '¡Nos vemos pronto!',
      unreadCount: 0,
      lastMessageTime: '8:30 AM',
    },
  ];

  messages = [
    { text: '¡Hola! ¿Cómo estás?', type: 'received', time: '10:05 AM' },
    { text: '¡Hola! Estoy bien, gracias. ¿Y tú?', type: 'sent', time: '10:06 AM' },
    { text: 'Todo bien, gracias 😊', type: 'received', time: '10:07 AM' },
  ];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      this.messages.push({ text: this.newMessage, type: 'sent', time: currentTime });
      this.newMessage = '';
    }
  }
}



