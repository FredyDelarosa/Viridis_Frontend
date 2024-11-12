import { Component, inject } from '@angular/core';

import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { DialogAddmaterialrequestComponent } from '../dialog-addmaterialrequest/dialog-addmaterialrequest.component';

import {MatButtonModule} from '@angular/material/button';
import { MatDialog, } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-imaterials-request',
  standalone: true,
  imports: [HeaderCompanyComponent, FooterUsersComponent  ],
  templateUrl: './imaterials-request.component.html',
  styleUrl: './imaterials-request.component.scss'
})
export class ImaterialsRequestComponent {

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddmaterialrequestComponent, {
      data: {},
    });


  }
}












