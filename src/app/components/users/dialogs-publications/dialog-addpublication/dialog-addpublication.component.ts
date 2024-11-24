import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../../../services/apiservice.service';

@Component({
  selector: 'app-dialog-addpublication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-addpublication.component.html',
  styleUrls: ['./dialog-addpublication.component.scss'],
})
export class DialogAddpublicationComponent {
  description = '';
  selectedFile: File | null = null;

  constructor(
    public dialogRef: MatDialogRef<DialogAddpublicationComponent>,
    private apiService: ApiserviceService
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  addPublication(): void {
    if (this.selectedFile && this.description.trim()) {
      const formData = new FormData();
      const userId = localStorage.getItem('user_id') || ''; // Obtener ID del usuario
      formData.append('id_usuario', userId);
      formData.append('descripcion', this.description);
      formData.append('file', this.selectedFile);

      this.apiService.createPublication(formData).subscribe({
        next: () => {
          alert('Publicación creada con éxito');
          this.dialogRef.close();
        },
        error: (err) => {
          console.error('Error al crear la publicación', err);
          alert('No se pudo crear la publicación');
        },
      });
    } else {
      alert('Por favor complete todos los campos');
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
