import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-deletepublication',
  standalone: true,
  imports: [],
  templateUrl: './dialog-deletepublication.component.html',
  styleUrl: './dialog-deletepublication.component.scss'
})
export class DialogDeletepublicationComponent {
  constructor(public dialogRef: MatDialogRef<DialogDeletepublicationComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }


}
