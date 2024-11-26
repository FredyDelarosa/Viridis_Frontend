import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiserviceService } from '../../../../services/apiservice.service';

@Component({
  selector: 'app-dialog-deletepublication',
  standalone: true,
  imports: [],
  templateUrl: './dialog-deletepublication.component.html',
  styleUrl: './dialog-deletepublication.component.scss'
})
export class DialogDeletepublicationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDeletepublicationComponent>,
    private apiService: ApiserviceService,
    @Inject(MAT_DIALOG_DATA) public data: { idPublicacion: string }
  ) {}


  closeDialog(): void {
    this.dialogRef.close();
  }

  deletePublication(): void {
    const userId = localStorage.getItem('user_id') || ''; // Obtén el ID del usuario autenticado

    if (!userId) {
      alert("Usuario no autenticado");
      this.closeDialog();
      return;
    }

    this.apiService.deletePublication(this.data.idPublicacion, userId).subscribe({
      next: () => {
        alert("Publicación eliminada correctamente");
        this.closeDialog(); // Cierra el diálogo después de eliminar
        window.location.reload();
      },
      error: (err) => {
        console.error("Error al eliminar la publicación", err);
        alert(err.error.detail || "No se pudo eliminar la publicación");
      },
    });
  }

}
