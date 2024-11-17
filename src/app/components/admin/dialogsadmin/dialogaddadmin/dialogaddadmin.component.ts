import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogaddadmin',
  standalone: true,
  imports: [],
  templateUrl: './dialogaddadmin.component.html',
  styleUrl: './dialogaddadmin.component.scss'
})
export class DialogaddadminComponent {
  constructor(public dialogRef: MatDialogRef<DialogaddadminComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
