import { Component } from '@angular/core';

import { HeaderUsersComponent } from '../header-users/header-users.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';

@Component({
  selector: 'app-icommunity',
  standalone: true,
  imports: [ HeaderUsersComponent, FooterUsersComponent],
  templateUrl: './icommunity.component.html',
  styleUrl: './icommunity.component.scss'
})
export class IcommunityComponent {

}
