import { Component } from '@angular/core';

import { HeaderUsersComponent } from '../header-users/header-users.component';
import { PaypalComponent } from '../paypal/paypal.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';

@Component({
  selector: 'app-ipaypal',
  standalone: true,
  imports: [HeaderUsersComponent ,FooterUsersComponent, PaypalComponent],
  templateUrl: './ipaypal.component.html',
  styleUrl: './ipaypal.component.scss'
})
export class IpaypalComponent {

}
