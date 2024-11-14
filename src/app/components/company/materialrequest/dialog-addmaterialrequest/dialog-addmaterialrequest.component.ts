import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-addmaterialrequest',
  standalone: true,
  imports: [],
  templateUrl: './dialog-addmaterialrequest.component.html',
  styleUrl: './dialog-addmaterialrequest.component.scss'
})
export class DialogAddmaterialrequestComponent {
    constructor(public dialogRef: MatDialogRef<DialogAddmaterialrequestComponent>) {}
    closeDialog(): void {
      this.dialogRef.close();
    }
  

}
