import { Component,  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogupdateadmin',
  standalone: true,
  imports: [],
  templateUrl: './dialogupdateadmin.component.html',
  styleUrl: './dialogupdateadmin.component.scss'
})
export class DialogupdateadminComponent {
  constructor(public dialogRef: MatDialogRef<DialogupdateadminComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
