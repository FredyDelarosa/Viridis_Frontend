import { Component } from '@angular/core';

import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { BusinesstableComponent } from "../businesstable/businesstable.component";
import { FooterUsersComponent } from "../../users/footer-users/footer-users.component";

import { GuardService } from '../../../services/guard.service';



@Component({
  selector: 'app-irequest-business',
  standalone: true,
  imports: [HeaderAdminComponent, BusinesstableComponent, FooterUsersComponent],
  templateUrl: './irequest-business.component.html',
  styleUrl: './irequest-business.component.scss'
})
export class IrequestBusinessComponent {
  constructor(private guardService: GuardService) {}

  ngOnInit(): void {
    this.guardService.guardAdmin();
  }
  

}
