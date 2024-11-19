import { Component } from '@angular/core';

import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

@Component({
  selector: 'app-iseerequest',
  standalone: true,
  imports: [HeaderRecyclerComponent, FooterUsersComponent],
  templateUrl: './iseerequest.component.html',
  styleUrl: './iseerequest.component.scss'
})
export class IseerequestComponent {

}
