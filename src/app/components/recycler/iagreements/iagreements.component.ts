import { Component } from '@angular/core';
import { HeaderRecyclerComponent } from "../header-recycler/header-recycler.component";
import { AgreementstableComponent } from "../agreementstable/agreementstable.component";
import { FooterUsersComponent } from "../../users/footer-users/footer-users.component";

@Component({
  selector: 'app-iagreements',
  standalone: true,
  imports: [HeaderRecyclerComponent, AgreementstableComponent, FooterUsersComponent],
  templateUrl: './iagreements.component.html',
  styleUrl: './iagreements.component.scss'
})
export class IagreementsComponent {

}
