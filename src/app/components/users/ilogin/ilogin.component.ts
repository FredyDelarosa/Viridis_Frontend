import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ilogin',
  standalone: true,
  imports: [
    FormsModule
  ],
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


