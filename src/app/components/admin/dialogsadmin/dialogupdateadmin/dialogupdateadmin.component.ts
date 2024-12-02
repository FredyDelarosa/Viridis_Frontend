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
    // Crear un objeto con todos los datos del formulario
    const updatedFields = {
      usuario: this.adminData.usuario || this.originalData.usuario,
      email: this.adminData.email || this.originalData.email,
    };
  
    // Verificar si alguno de los campos es inválido o está vacío
    if (!updatedFields.usuario || !updatedFields.email) {
      alert('Todos los campos deben estar completos.');
      return;
    }
  
    const adminId = this.data.admin.id_administrador;
  
    console.log('Datos enviados al servidor:', updatedFields);
  
    // Llamar al servicio para actualizar el administrador
    this.apiService.updateAdministrator(adminId, updatedFields).subscribe({
      next: (response) => {
        console.log('Administrador actualizado:', response);
        alert("Administrador Actualizado Correctamente.")
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
