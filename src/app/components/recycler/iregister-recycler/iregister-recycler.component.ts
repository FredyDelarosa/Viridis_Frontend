import { Component } from '@angular/core';

import { HeaderUsersComponent } from '../../users/header-users/header-users.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

@Component({
  selector: 'app-iregister-recycler',
  standalone: true,
  imports: [ HeaderUsersComponent, FooterUsersComponent],
  templateUrl: './iregister-recycler.component.html',
  styleUrl: './iregister-recycler.component.scss'
})
export class IregisterRecyclerComponent {

}
