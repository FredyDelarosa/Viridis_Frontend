import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiserviceService } from '../../../../services/apiservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dialogaddadmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialogaddadmin.component.html',
  styleUrls: ['./dialogaddadmin.component.scss']
})
export class DialogaddadminComponent {
  adminData = {
    usuario: '',
    email: '',
    password: '' // Cambiar 'contraseña' por 'password'
  };
  
  constructor(
    public dialogRef: MatDialogRef<DialogaddadminComponent>,
    private apiService: ApiserviceService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const { password, ...payload } = {
      ...this.adminData,
      contraseña: this.adminData.password, // Mapear 'password' a 'contraseña'
    };
  
    this.apiService.createAdministrator(payload).subscribe({
      next: (response) => {
        console.log('Administrador creado:', response);
        this.dialogRef.close();
        alert("Administrador creado exitosamente.")
        window.location.reload()
      },
      error: (error) => {
        console.error('Error al crear administrador:', error);
      }
    });
  }
  
  
  
}
