import { Component } from '@angular/core';
import { HeaderCompanyComponent } from '../../company/header-company/header-company.component';
import { BusinesstableComponent } from "../businesstable/businesstable.component";
import { FooterUsersComponent } from "../../users/footer-users/footer-users.component";



@Component({
  selector: 'app-irequest-business',
  standalone: true,
  imports: [HeaderCompanyComponent, BusinesstableComponent, FooterUsersComponent],
  templateUrl: './irequest-business.component.html',
  styleUrl: './irequest-business.component.scss'
})
export class IrequestBusinessComponent {

}
