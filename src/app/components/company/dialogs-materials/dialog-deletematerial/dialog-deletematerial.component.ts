import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-deletematerial',
  standalone: true,
  templateUrl: './dialog-deletematerial.component.html',
  styleUrls: ['./dialog-deletematerial.component.scss']
})
export class DialogDeletematerialComponent {
  constructor(public dialogRef: MatDialogRef<DialogDeletematerialComponent>) {}

  closeDialog(): void {
    this.dialogRef.close(false); // Cerrar sin confirmar
  }

  confirmDelete(): void {
    this.dialogRef.close(true); // Confirmar eliminación
  }
}
