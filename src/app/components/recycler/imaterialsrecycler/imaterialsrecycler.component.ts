import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, Router } from '@angular/router';
import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { GuardService } from '../../../services/guard.service';

@Component({
  selector: 'app-imaterialsrecycler',
  standalone: true,
  imports: [HeaderRecyclerComponent, FooterUsersComponent, RouterLink, RouterLinkActive, ],
  templateUrl: './imaterialsrecycler.component.html',
  styleUrl: './imaterialsrecycler.component.scss'
})
export class ImaterialsrecyclerComponent {
  constructor(private router:Router, private guardService:GuardService){}

  ngOnInit(): void {
    this.guardService.guardRecycler();
  }

  routeToSeeRequest(){
    this.router.navigate(["/recycler/seerequest"])
  }


}
