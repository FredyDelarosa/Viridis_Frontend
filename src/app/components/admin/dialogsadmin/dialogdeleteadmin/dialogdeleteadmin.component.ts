import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../../../../services/apiservice.service';

@Component({
  selector: 'app-dialogdeleteadmin',
  standalone: true,
  imports: [],
  templateUrl: './dialogdeleteadmin.component.html',
  styleUrls: ['./dialogdeleteadmin.component.scss']
})
export class DialogdeleteadminComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogdeleteadminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe datos del padre
    private apiService: ApiserviceService
  ) {}

  closeDialog(): void {
    this.dialogRef.close(false); // Indica que se canceló
  }

  deleteAdmin(): void {
    const adminId = this.data.admin.id_administrador;

    this.apiService.deleteAdministrator(adminId).subscribe({
      next: (response) => {
        console.log('Administrador eliminado:', response);
        this.dialogRef.close(true); // Indica que la eliminación fue exitosa
      },
      error: (error) => {
        console.error('Error al eliminar el administrador:', error);
        alert('No se pudo eliminar el administrador.');
        this.dialogRef.close(false); // Indica que falló la eliminación
      },
    });
  }
}
