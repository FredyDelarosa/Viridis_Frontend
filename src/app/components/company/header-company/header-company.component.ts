import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-header-company',
  standalone: true,
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './header-company.component.html',
  styleUrl: './header-company.component.scss'
})
export class HeaderCompanyComponent {
      constructor(private router:Router){}

  routeToCommunity(){
    this.router.navigate(["/company/community"])
  }

 
}
