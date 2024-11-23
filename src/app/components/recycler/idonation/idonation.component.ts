import { Component } from '@angular/core';
import { FooterUsersComponent } from "../../users/footer-users/footer-users.component";
import { HeaderUsersComponent } from "../../users/header-users/header-users.component";

@Component({
  selector: 'app-idonation',
  standalone: true,
  imports: [FooterUsersComponent, HeaderUsersComponent],
  templateUrl: './idonation.component.html',
  styleUrl: './idonation.component.scss'
})
export class IdonationComponent {

}
