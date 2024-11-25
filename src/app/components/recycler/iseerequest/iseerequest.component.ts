import { Component, signal } from '@angular/core';

import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { GuardService } from '../../../services/guard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iseerequest',
  standalone: true,
  imports: [HeaderRecyclerComponent, FooterUsersComponent, CommonModule],
  templateUrl: './iseerequest.component.html',
  styleUrl: './iseerequest.component.scss'
})
export class IseerequestComponent {
  requestDetails = signal<any>(null);

  constructor(private router:Router, private guardService:GuardService, private apiservice: ApiserviceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtener el ID de la ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadRequestDetails(id);
    }
  }
  loadRequestDetails(id: string): void {
    this.apiservice.getRequestDetails(id).subscribe({
      next: (details) => {
        this.requestDetails.set(details); // Almacenar detalles
      },
      error: (err) => console.error('Error al cargar los detalles:', err),
    });
  }

  
  routeToChat(){
    this.router.navigate(["/chat"])
  }


}
