import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../../../../services/apiservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialogupdateadmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialogupdateadmin.component.html',
  styleUrls: ['./dialogupdateadmin.component.scss']
})
export class DialogupdateadminComponent {
  adminData = {
    usuario: '',
    email: '',
    contrasena: '',
  };

  originalData = {
    usuario: '',
    email: '',
    contrasena: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogupdateadminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibimos datos del componente padre
    private apiService: ApiserviceService
  ) {
    console.log('Datos del administrador recibidos:', data.admin); // Verifica que el ID esté disponible
    this.adminData = { ...data.admin }; // Inicializamos los valores con los datos existentes
    this.originalData = { ...data.admin }; // Guardamos los datos originales
    this.adminData.contrasena = data.admin.contrasena || '';
  }  

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateAdmin(): void {
    // Siempre enviar ambos campos (usuario y email)
    const updatedFields = {
      usuario: this.adminData.usuario || this.originalData.usuario,
      email: this.adminData.email || this.originalData.email,
    };
  
    // Verificar que al menos uno de los campos sea diferente antes de enviar
    if (
      updatedFields.usuario === this.originalData.usuario &&
      updatedFields.email === this.originalData.email
    ) {
      alert('No se realizaron cambios para actualizar.');
      return;
    }
  
    const adminId = this.data.admin.id_administrador;
  
    console.log('Datos enviados al servidor:', updatedFields);
  
    // Llamar al servicio con los datos actualizados
    this.apiService.updateAdministrator(adminId, updatedFields).subscribe({
      next: (response) => {
        console.log('Administrador actualizado:', response);
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error al actualizar el administrador:', error);
        if (error.error?.detail) {
          console.error('Detalle del error:', error.error.detail);
        }
        alert(`Error al actualizar el administrador: ${error.error.detail || 'Error desconocido'}`);
      },
    });
  }
  
}
