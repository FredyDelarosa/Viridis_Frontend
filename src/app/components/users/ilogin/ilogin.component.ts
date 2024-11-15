import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { HeaderUsersComponent } from '../header-users/header-users.component';

@Component({
  selector: 'app-ilogin',
  standalone: true,
  imports: [
    FormsModule, FooterUsersComponent, HeaderUsersComponent],
  templateUrl: './ilogin.component.html',
  styleUrl: './ilogin.component.scss'
})
export class IloginComponent {
  correo: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Correo:', this.correo);
    console.log('Contraseña:', this.password);
    // Aquí puedes llamar a un servicio para autenticar al usuario
  }

  
}


