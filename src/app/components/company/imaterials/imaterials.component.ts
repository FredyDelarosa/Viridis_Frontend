import { Component } from '@angular/core';

import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { MaterialstableComponent } from '../materialstable/materialstable.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

@Component({
  selector: 'app-imaterials',
  standalone: true,
  imports: [HeaderCompanyComponent ,MaterialstableComponent, FooterUsersComponent],
  templateUrl: './imaterials.component.html',
  styleUrl: './imaterials.component.scss'
})
export class ImaterialsComponent {

}
