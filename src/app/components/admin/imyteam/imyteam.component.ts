import { Component } from '@angular/core';

import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { AdminstableComponent } from '../adminstable/adminstable.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';




@Component({
  selector: 'app-imyteam',
  standalone: true,
  imports: [ HeaderAdminComponent, AdminstableComponent, FooterUsersComponent,],
  templateUrl: './imyteam.component.html',
  styleUrl: './imyteam.component.scss'
})
export class ImyteamComponent {

}
