import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderUsersComponent } from '../../users/header-users/header-users.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { ApiserviceService } from '../../../services/apiservice.service';

@Component({
  selector: 'app-iregister-recycler',
  standalone: true,
  imports: [HeaderUsersComponent, FooterUsersComponent, FormsModule],
  templateUrl: './iregister-recycler.component.html',
  styleUrls: ['./iregister-recycler.component.scss'],
})
export class IregisterRecyclerComponent {
  formData = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
  };

  constructor(private router: Router, private apiService: ApiserviceService) {}

  onSubmit(): void {
    if (this.formData.contrasena !== this.formData.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    if (!this.formData.nombre || !this.formData.correo || !this.formData.contrasena) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.correo)) {
      alert('Por favor, introduce un correo válido.');
      return;
    }
  
    const payload = {
      usuario: this.formData.nombre,
      email: this.formData.correo,
      contraseña: this.formData.contrasena,
    };
  
    this.apiService.registerRecycler(payload).subscribe(
      (response) => {
        alert('Cuenta creada exitosamente');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error:', error.error.detail);
        alert('Ocurrió un error al registrar el reciclador: ' + JSON.stringify(error.error.detail));
      }
    );
  }
  
}

