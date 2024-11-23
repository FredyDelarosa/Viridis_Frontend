import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
  constructor(private router:Router){}

  routeToMyTeam(){
    this.router.navigate(["/admin/myteam"])
  }

}
