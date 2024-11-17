import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogdeleteadmin',
  standalone: true,
  imports: [],
  templateUrl: './dialogdeleteadmin.component.html',
  styleUrl: './dialogdeleteadmin.component.scss'
})
export class DialogdeleteadminComponent {
  constructor(public dialogRef: MatDialogRef<DialogdeleteadminComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
