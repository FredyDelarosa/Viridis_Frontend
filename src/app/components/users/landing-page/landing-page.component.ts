import { Component } from '@angular/core';
import { HeaderUsersComponent } from '../header-users/header-users.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderUsersComponent, FooterUsersComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router:Router){}
  
  routeToPaypal(){
    this.router.navigate(["/paypal"])
  }


}
