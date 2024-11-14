import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-dialog-updatematerialrequest',
  standalone: true,
  imports: [MatFormFieldModule,],
  templateUrl: './dialog-updatematerialrequest.component.html',
  styleUrl: './dialog-updatematerialrequest.component.scss'
})
export class DialogUpdatematerialrequestComponent {

}
