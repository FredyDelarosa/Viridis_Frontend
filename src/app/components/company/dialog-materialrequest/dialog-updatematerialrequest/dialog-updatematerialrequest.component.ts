import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiserviceService } from '../../../../services/apiservice.service';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-updatematerialrequest',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-updatematerialrequest.component.html',
  styleUrl: './dialog-updatematerialrequest.component.scss'
})
export class DialogUpdatematerialrequestComponent {
  materialRequest: any;
  selectedFile: File | null = null;

  constructor(
    public dialogRef: MatDialogRef<DialogUpdatematerialrequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiservice: ApiserviceService
  ) {
    this.materialRequest = { ...data }; // Clona los datos para evitar cambios directos
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  updateMaterialRequest(): void {
    const formData = new FormData();
  
    // Excluir 'nombre_material' porque no se debe modificar
    formData.append('cantidad_solicitada', this.materialRequest.cantidad_solicitada.toString());
    formData.append('precio', this.materialRequest.precio.toString());
    formData.append('descripcion', this.materialRequest.descripcion);
  
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
  
    this.apiservice.updateMaterialRequest(this.materialRequest.id_solicitud, formData).subscribe({
      next: (response) => {
        console.log('Solicitud actualizada:', response);
        alert('Solicitud Actualizada Exitosamente.');
        this.dialogRef.close(response);
        window.location.reload();
      },
      error: (err) => {
        console.error('Error al actualizar la solicitud:', err);
      },
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
