import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderUsersComponent } from '../../users/header-users/header-users.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

@Component({
  selector: 'app-iregister-recycler',
  standalone: true,
  imports: [ HeaderUsersComponent, FooterUsersComponent],
  templateUrl: './iregister-recycler.component.html',
  styleUrl: './iregister-recycler.component.scss'
})
export class IregisterRecyclerComponent {
    constructor(private router:Router){}
  
    routeSuccessfulRegistration(){
      alert("Cuenta creada exitosamente")
      this.router.navigate(["/login"])
    }
  
}
