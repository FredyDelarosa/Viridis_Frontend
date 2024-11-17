import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-addpublication',
  standalone: true,
  imports: [],
  templateUrl: './dialog-addpublication.component.html',
  styleUrl: './dialog-addpublication.component.scss'
})
export class DialogAddpublicationComponent {
  constructor(public dialogRef: MatDialogRef<DialogAddpublicationComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
