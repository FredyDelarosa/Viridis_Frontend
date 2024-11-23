import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../../../services/apiservice.service';

@Component({
  selector: 'app-dialog-addmaterialrequest',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-addmaterialrequest.component.html',
  styleUrl: './dialog-addmaterialrequest.component.scss',
})
export class DialogAddmaterialrequestComponent implements OnInit {
  materials: any[] = [];
  selectedMaterial: string = '';
  formData = {
    cantidad_solicitada: 0,
    precio: 0,
    descripcion: '',
    file: null as File | null,
  };

  constructor(
    public dialogRef: MatDialogRef<DialogAddmaterialrequestComponent>,
    private apiService: ApiserviceService
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      console.error('ID de la empresa no encontrado');
      return;
    }

    this.apiService.getMaterialsByCompany(userId).subscribe({
      next: (materials) => {
        this.materials = materials;
      },
      error: (err) => {
        console.error('Error al cargar materiales:', err);
      },
    });
  }

  onFileChange(event: any): void {
    this.formData.file = event.target.files[0];
  }

  onSubmit(): void {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      console.error('ID de la empresa no encontrado');
      return;
    }

    if (!this.selectedMaterial || !this.formData.file) {
      console.error('Material o archivo no seleccionado');
      return;
    }

    const formData = new FormData();
    formData.append('id_material', this.selectedMaterial);
    formData.append('cantidad_solicitada', String(this.formData.cantidad_solicitada));
    formData.append('precio', String(this.formData.precio));
    formData.append('descripcion', this.formData.descripcion);
    formData.append('file', this.formData.file);

    this.apiService.createMaterialRequest(formData).subscribe({
      next: (response) => {
        console.log('Solicitud creada:', response);
        this.closeDialog();
      },
      error: (err) => {
        console.error('Error al crear solicitud:', err);
      },
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
