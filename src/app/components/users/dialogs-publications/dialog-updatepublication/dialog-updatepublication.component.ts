import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiserviceService } from '../../../../services/apiservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-updatepublication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-updatepublication.component.html',
  styleUrl: './dialog-updatepublication.component.scss'
})
export class DialogUpdatepublicationComponent {
  public descripcion: string = "";
  public idPublicacion: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogUpdatepublicationComponent>,
    private apiservice: ApiserviceService,
    @Inject(MAT_DIALOG_DATA) public data: { idPublicacion: string; descripcion: string }
  ) {
    this.descripcion = data.descripcion; // Inicializa con datos pasados
    this.idPublicacion = data.idPublicacion;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updatePublication(): void {
    const userId = localStorage.getItem('user_id') || ''; // Obtén el ID del usuario autenticado
  
    if (!userId) {
      alert("Usuario no autenticado");
      this.closeDialog();
      return;
    }
  
    // Preparar los datos según el esquema esperado por el backend
    const updateData = {
      descripcion: this.descripcion,
      id_usuario: userId,
    };
  
    this.apiservice.updatePublication(this.idPublicacion, updateData).subscribe({
      next: () => {
        alert("Publicación actualizada correctamente");
        this.closeDialog();
        window.location.reload();
      },
      error: (err) => {
        console.error("Error al actualizar la publicación", err);
        alert(err.error.detail || "No se pudo actualizar la publicación");
      },
    });
  }
  
}
