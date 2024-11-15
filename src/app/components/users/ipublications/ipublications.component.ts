import { Component, inject } from '@angular/core';

import { HeaderCompanyComponent } from '../../company/header-company/header-company.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { DialogAddmaterialrequestComponent } from '../../company/dialog-materialrequest/dialog-addmaterialrequest/dialog-addmaterialrequest.component';


import { MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-ipublications',
  standalone: true,
  imports: [HeaderCompanyComponent ,FooterUsersComponent, ],
  templateUrl: './ipublications.component.html',
  styleUrl: './ipublications.component.scss'
})
export class IpublicationsComponent {

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddmaterialrequestComponent, {
      data: {},
    });


  }

}
