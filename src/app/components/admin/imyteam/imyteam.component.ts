import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { AdminstableComponent } from '../adminstable/adminstable.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { DialogaddadminComponent } from '../dialogsadmin/dialogaddadmin/dialogaddadmin.component';







@Component({
  selector: 'app-imyteam',
  standalone: true,
  imports: [ HeaderAdminComponent, AdminstableComponent, FooterUsersComponent,],
  templateUrl: './imyteam.component.html',
  styleUrl: './imyteam.component.scss'
})
export class ImyteamComponent {
  readonly dialog = inject(MatDialog);

  addAdmin(): void {
    const dialogRef = this.dialog.open(DialogaddadminComponent, {
      data: {},
    });
  }



}
