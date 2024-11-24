import { Component } from '@angular/core';

import { HeaderUsersComponent } from '../header-users/header-users.component';
import { PaypalButtonComponent } from '../paypal-button/paypal-button.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ipaypal',
  standalone: true,
  imports: [HeaderUsersComponent ,FooterUsersComponent, PaypalButtonComponent, FormsModule],
  templateUrl: './ipaypal.component.html',
  styleUrl: './ipaypal.component.scss'
})
export class IpaypalComponent {
  amount: number = 1;  // Inicializamos el monto en 0

  onAmountChange(event: any): void {
    this.amount = event.target.value;
  }

}
