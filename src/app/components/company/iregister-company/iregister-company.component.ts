import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderUsersComponent } from '../../users/header-users/header-users.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { HeaderCompanyComponent } from "../header-company/header-company.component";

@Component({
  selector: 'app-iregister-company',
  standalone: true,
  imports: [HeaderUsersComponent, FooterUsersComponent, HeaderCompanyComponent],
  templateUrl: './iregister-company.component.html',
  styleUrl: './iregister-company.component.scss'
})
export class IregisterCompanyComponent {
  constructor(private router:Router){}

  routeSuccessfulRegistration(){
    alert("Cuenta creada exitosamente, estamos validando tu información")
    this.router.navigate(["/login"])
  }

}
