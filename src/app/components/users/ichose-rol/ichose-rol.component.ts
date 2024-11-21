import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderUsersComponent } from "../header-users/header-users.component";
import { FooterUsersComponent } from "../footer-users/footer-users.component";

@Component({
  selector: 'app-ichose-rol',
  standalone: true,
  imports: [HeaderUsersComponent, FooterUsersComponent, RouterLink, RouterLinkActive],
  templateUrl: './ichose-rol.component.html',
  styleUrl: './ichose-rol.component.scss'
})
export class IchoseRolComponent {

}
