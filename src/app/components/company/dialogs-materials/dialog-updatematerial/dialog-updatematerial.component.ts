import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-updatematerial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-updatematerial.component.html',
  styleUrls: ['./dialog-updatematerial.component.scss']
})
export class DialogUpdatematerialComponent {
  nombreMaterial: string;
  cantidadMaterial: number;

  constructor(
    public dialogRef: MatDialogRef<DialogUpdatematerialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Inicializar con los datos recibidos
    this.nombreMaterial = data.nombre || '';
    this.cantidadMaterial = data.cantidad || 0;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveChanges(): void {
    const payload = {
      nombre_material: this.nombreMaterial || undefined,
      cantidad: this.cantidadMaterial || undefined,
    };
    this.dialogRef.close(payload);
  }
  
}
