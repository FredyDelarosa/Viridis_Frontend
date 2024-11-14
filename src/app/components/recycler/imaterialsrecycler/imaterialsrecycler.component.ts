import { Component } from '@angular/core';

import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

@Component({
  selector: 'app-imaterialsrecycler',
  standalone: true,
  imports: [HeaderRecyclerComponent, FooterUsersComponent, ],
  templateUrl: './imaterialsrecycler.component.html',
  styleUrl: './imaterialsrecycler.component.scss'
})
export class ImaterialsrecyclerComponent {

}
