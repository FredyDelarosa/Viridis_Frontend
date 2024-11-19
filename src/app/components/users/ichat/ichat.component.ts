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

  // Ejemplo de contactos
  contacts = [
    {
      name: 'Juan',
      lastMessage: 'Hola, ¿cómo estás?', // Último mensaje (puede ser enviado o recibido)
      lastMessageTime: '10:30 AM', // Hora del último mensaje
      unreadCount: 0, // Número de mensajes no leídos (sólo si el remitente es otro contacto)
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

  // Mensaje nuevo
  newMessage: string = '';

  // Función para enviar mensaje
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        type: 'sent', // Define que el mensaje es enviado
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      this.newMessage = ''; // Limpiar el campo de entrada después de enviar el mensaje
    }
  }
}
