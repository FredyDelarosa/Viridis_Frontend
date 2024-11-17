import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-updatepublication',
  standalone: true,
  imports: [],
  templateUrl: './dialog-updatepublication.component.html',
  styleUrl: './dialog-updatepublication.component.scss'
})
export class DialogUpdatepublicationComponent {
  constructor(public dialogRef: MatDialogRef<DialogUpdatepublicationComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
