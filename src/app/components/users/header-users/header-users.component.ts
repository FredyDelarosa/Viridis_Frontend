import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-users',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-users.component.html',
  styleUrl: './header-users.component.scss'
})
export class HeaderUsersComponent {

}
