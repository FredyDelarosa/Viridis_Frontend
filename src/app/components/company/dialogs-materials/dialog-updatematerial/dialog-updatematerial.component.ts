import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-updatematerial',
  standalone: true,
  imports: [MatFormFieldModule,],
  templateUrl: './dialog-updatematerial.component.html',
  styleUrl: './dialog-updatematerial.component.scss'
})
export class DialogUpdatematerialComponent {
  constructor(public dialogRef: MatDialogRef<DialogUpdatematerialComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
