import { Component, inject } from '@angular/core';

import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

import { DialogAddmaterialrequestComponent } from '../dialog-materialrequest/dialog-addmaterialrequest/dialog-addmaterialrequest.component';
import { DialogUpdatematerialrequestComponent } from '../dialog-materialrequest/dialog-updatematerialrequest/dialog-updatematerialrequest.component';
import { DialogDeletematerialrequestComponent } from '../dialog-materialrequest/dialog-deletematerialrequest/dialog-deletematerialrequest.component';
import { MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-imaterials-request',
  standalone: true,
  imports: [HeaderCompanyComponent, FooterUsersComponent  ],
  templateUrl: './imaterials-request.component.html',
  styleUrl: './imaterials-request.component.scss'
})
export class ImaterialsRequestComponent {

  readonly dialog = inject(MatDialog);

  addMaterialRequest(): void {
    const dialogRef = this.dialog.open(DialogAddmaterialrequestComponent, {
      data: {},
    });
  }

 updateMaterialRequest(): void {
    const dialogRef = this.dialog.open(DialogUpdatematerialrequestComponent, {
      data: {},
    });
  }

  deleteMaterialRequest(): void{
    const dialogRef = this.dialog.open(DialogDeletematerialrequestComponent, {
      data: {},
    });
  }

}












