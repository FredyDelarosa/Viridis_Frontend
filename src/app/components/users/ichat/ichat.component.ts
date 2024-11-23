import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderUsersComponent } from "../header-users/header-users.component";

@Component({
  selector: 'app-ichat',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderUsersComponent],
  templateUrl: './ichat.component.html',
  styleUrls: ['./ichat.component.scss'],
})
export class IchatComponent {
  // Ejemplo de contactos
  contacts = [
    {
      name: 'Juan',
      lastMessage: 'Hola, ¿cómo estás?',
      lastMessageTime: '10:30 AM',
      unreadCount: 0,
    },
    {
      name: 'Ana',
      lastMessage: '¿Vamos a la reunión?',
      lastMessageTime: '10:00 AM',
      unreadCount: 2,
    },
    {
      name: 'Dulce',
      lastMessage: 'Quiero Dulces 😀',
      lastMessageTime: 'Ayer',
      unreadCount: 2,
    },
  ];

  // Mensajes del chat actual
  messages = [
    { type: 'received', text: 'Hola, ¿cómo estás?', time: '10:30 AM' },
    { type: 'sent', text: '¡Bien! ¿Y tú?', time: '10:31 AM' },
    { type: 'received', text: 'Me alegro mucho', time: '12:05 PM' },
  ];

  // Estado para modo responsivo
  isResponsive: boolean = false;
  view: string = 'chat'; // Vista activa: 'contacts' o 'chat'

  newMessage: string = ''; // Mensaje nuevo

  // Detectar cambios en el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkResponsive();
  }

  constructor() {
    this.checkResponsive();
  }

  // Verificar si es responsivo
  checkResponsive() {
    this.isResponsive = window.innerWidth <= 768;
  }

  // Cambiar vista entre contactos y chat
  toggleView(view: string) {
    this.view = view;
  }

  // Función para enviar mensaje
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        type: 'sent',
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      this.newMessage = '';
    }
  }
}
