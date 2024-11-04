import { Component } from '@angular/core';
import { HeaderUsersComponent } from "../header-users/header-users.component";
import { FooterUsersComponent } from "../footer-users/footer-users.component";

@Component({
  selector: 'app-ichose-rol',
  standalone: true,
  imports: [HeaderUsersComponent, FooterUsersComponent],
  templateUrl: './ichose-rol.component.html',
  styleUrl: './ichose-rol.component.scss'
})
export class IchoseRolComponent {

}
