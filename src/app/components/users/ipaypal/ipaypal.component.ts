import { Component } from '@angular/core';

import { HeaderCompanyComponent } from '../../company/header-company/header-company.component';
import { PaypalComponent } from '../paypal/paypal.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';

@Component({
  selector: 'app-ipaypal',
  standalone: true,
  imports: [HeaderCompanyComponent ,FooterUsersComponent, PaypalComponent],
  templateUrl: './ipaypal.component.html',
  styleUrl: './ipaypal.component.scss'
})
export class IpaypalComponent {

}
