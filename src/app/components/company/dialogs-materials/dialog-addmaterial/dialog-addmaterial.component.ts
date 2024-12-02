import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../../../services/apiservice.service';

@Component({
  selector: 'app-dialog-addmaterial',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-addmaterial.component.html',
  styleUrl: './dialog-addmaterial.component.scss'
})
export class DialogAddmaterialComponent {

  formData ={
    nombre_material: '',
    cantidad: 0,
  };

  constructor(public dialogRef: MatDialogRef<DialogAddmaterialComponent>, private apiService: ApiserviceService) {}

  onSubmit(): void {
    const userId = localStorage.getItem('user_id'); // Obtén el ID desde el localStorage
    if (!userId) {
      console.error('ID de la empresa no encontrado en el localStorage');
      return;
    }
  
    // Prepara los datos para la solicitud
    const requestData = {
      nombre_material: this.formData.nombre_material,
      cantidad: this.formData.cantidad,
      id_empresa: userId,
    };
  
    this.apiService.addMaterialRequest(requestData).subscribe({
      next: (response) => {
        console.log('Material agregado:', response);
        alert("Material Agregado Exitosamente");
        this.closeDialog();
        window.location.reload();

      },
      error: (error) => {
        console.error('Error al agregar material:', error);
      },
    });
  }
  
  
  closeDialog(): void {
    this.dialogRef.close();
  }

}
