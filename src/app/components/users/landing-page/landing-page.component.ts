import { Component } from '@angular/core';
import { HeaderUsersComponent } from '../header-users/header-users.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { TidioService } from '../../../services/tidio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderUsersComponent, FooterUsersComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router:Router, private tidioService: TidioService){}

  ngOnInit(): void {
    // Cargar el chat de Tidio cuando el componente se inicialice
    this.tidioService.loadTidioChat(); // Llama a este método en ngOnInit o donde lo necesites

  }
  
  routeToPaypal(){
    this.router.navigate(["/paypal"])
  }


}
