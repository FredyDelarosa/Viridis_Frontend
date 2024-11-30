import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../../services/apiservice.service';
import { HeaderUsersComponent } from '../../users/header-users/header-users.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

@Component({
  selector: 'app-iregister-company',
  standalone: true,
  imports: [HeaderUsersComponent, FooterUsersComponent],
  templateUrl: './iregister-company.component.html',
  styleUrls: ['./iregister-company.component.scss']
})
export class IregisterCompanyComponent {
  constructor(private router: Router, private apiService: ApiserviceService) {}

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Confirmar que se adjuntó el archivo correctamente
    const fileInput = form.querySelector<HTMLInputElement>('#fotos');
    if (fileInput?.files?.length) {
      formData.append('file', fileInput.files[0]); // Asegurar que el archivo esté en la clave `file`
    } else {
      alert('Por favor, adjunta una imagen.');
      return;
    }

    this.apiService.registerCompany(formData).subscribe({
      next: () => {
        alert('Cuenta creada exitosamente.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al registrar la empresa:', err);
        alert('Hubo un problema al registrar la empresa. Revisa los datos e intenta de nuevo.');
      }
    });
  }
}
