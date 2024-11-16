import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-deletematerial',
  standalone: true,
  imports: [],
  templateUrl: './dialog-deletematerial.component.html',
  styleUrl: './dialog-deletematerial.component.scss'
})
export class DialogDeletematerialComponent {
  constructor(public dialogRef: MatDialogRef<DialogDeletematerialComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
