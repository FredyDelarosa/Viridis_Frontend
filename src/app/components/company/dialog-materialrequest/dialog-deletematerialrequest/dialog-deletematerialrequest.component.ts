import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../../../../services/apiservice.service';

@Component({
  selector: 'app-dialog-deletematerialrequest',
  standalone: true,
  templateUrl: './dialog-deletematerialrequest.component.html',
  styleUrl: './dialog-deletematerialrequest.component.scss',
})
export class DialogDeletematerialrequestComponent {
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogDeletematerialrequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id_solicitud: string },
    private apiservice: ApiserviceService
  ) {}

  confirmDelete(): void {
    this.isLoading = true;
    this.apiservice.deleteMaterialRequest(this.data.id_solicitud).subscribe({
      next: () => {
        console.log('Solicitud eliminada correctamente');
        this.dialogRef.close(true); // Notificar éxito al componente principal
      },
      error: (err) => {
        console.error('Error al eliminar la solicitud:', err);
        this.dialogRef.close(false); // Notificar error al componente principal
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  closeDialog(): void {
    this.dialogRef.close(false); // Cancelar eliminación
  }
}
