import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, Router } from '@angular/router';

import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

@Component({
  selector: 'app-imaterialsrecycler',
  standalone: true,
  imports: [HeaderRecyclerComponent, FooterUsersComponent, RouterLink, RouterLinkActive, ],
  templateUrl: './imaterialsrecycler.component.html',
  styleUrl: './imaterialsrecycler.component.scss'
})
export class ImaterialsrecyclerComponent {
  constructor(private router:Router){}

  routeToSeeRequest(){
    this.router.navigate(["/seerequest"])
  }


}
