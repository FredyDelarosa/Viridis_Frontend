import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-imaterials-request',
  standalone: true,
  imports: [],
  templateUrl: './dialog-imaterials-request.component.html',
  styleUrl: './dialog-imaterials-request.component.scss'
})
export class DialogImaterialsRequestComponent {
  constructor(public dialogRef: MatDialogRef<DialogImaterialsRequestComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}



