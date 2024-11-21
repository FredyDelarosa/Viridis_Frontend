import { Component, inject } from '@angular/core';

import { HeaderCompanyComponent } from '../../company/header-company/header-company.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { DialogAddpublicationComponent } from '../dialogs-publications/dialog-addpublication/dialog-addpublication.component';
import { DialogUpdatepublicationComponent } from '../dialogs-publications/dialog-updatepublication/dialog-updatepublication.component';

import { MatDialog, } from '@angular/material/dialog';
import { DialogDeletepublicationComponent } from '../dialogs-publications/dialog-deletepublication/dialog-deletepublication.component';

@Component({
  selector: 'app-ipublications',
  standalone: true,
  imports: [HeaderCompanyComponent ,FooterUsersComponent, ],
  templateUrl: './ipublications.component.html',
  styleUrl: './ipublications.component.scss'
})
export class IpublicationsComponent {

  readonly dialog = inject(MatDialog);

  addPublication(): void {
    const dialogRef = this.dialog.open(DialogAddpublicationComponent , {
      data: {},
    });
  }

  updatePublication(): void {
    const dialogRef = this.dialog.open(DialogUpdatepublicationComponent , {
      data: {},
    });
  }

  deletePublication(): void {
    const dialogRef = this.dialog.open(DialogDeletepublicationComponent , {
      data: {},
    });
  }

}
