import { Component } from '@angular/core';

import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { GuardService } from '../../../services/guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iseerequest',
  standalone: true,
  imports: [HeaderRecyclerComponent, FooterUsersComponent],
  templateUrl: './iseerequest.component.html',
  styleUrl: './iseerequest.component.scss'
})
export class IseerequestComponent {
  constructor(private router:Router, private guardService:GuardService){}

  ngOnInit(): void {
    this.guardService.guardRecycler();
  }
  
  routeToChat(){
    this.router.navigate(["/chat"])
  }


}
