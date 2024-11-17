import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-deletematerialrequest',
  standalone: true,
  imports: [],
  templateUrl: './dialog-deletematerialrequest.component.html',
  styleUrl: './dialog-deletematerialrequest.component.scss'
})
export class DialogDeletematerialrequestComponent {
  constructor(public dialogRef: MatDialogRef<DialogDeletematerialrequestComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
