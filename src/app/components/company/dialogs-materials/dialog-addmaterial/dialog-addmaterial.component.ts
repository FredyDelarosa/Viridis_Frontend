import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-addmaterial',
  standalone: true,
  imports: [],
  templateUrl: './dialog-addmaterial.component.html',
  styleUrl: './dialog-addmaterial.component.scss'
})
export class DialogAddmaterialComponent {
  constructor(public dialogRef: MatDialogRef<DialogAddmaterialComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
