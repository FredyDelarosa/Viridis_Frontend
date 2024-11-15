import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-dialog-updatematerialrequest',
  standalone: true,
  imports: [MatFormFieldModule,],
  templateUrl: './dialog-updatematerialrequest.component.html',
  styleUrl: './dialog-updatematerialrequest.component.scss'
})
export class DialogUpdatematerialrequestComponent {
  constructor(public dialogRef: MatDialogRef<DialogUpdatematerialrequestComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
