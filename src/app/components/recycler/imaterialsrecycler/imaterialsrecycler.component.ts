import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, Router } from '@angular/router';
import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { GuardService } from '../../../services/guard.service';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imaterialsrecycler',
  standalone: true,
  imports: [CommonModule, HeaderRecyclerComponent, FooterUsersComponent, RouterLink, RouterLinkActive, ],
  templateUrl: './imaterialsrecycler.component.html',
  styleUrl: './imaterialsrecycler.component.scss'
})
export class ImaterialsrecyclerComponent {
  materialRequests = signal<any[]>([]);

  constructor(private router:Router, private guardService:GuardService, private apiservice: ApiserviceService){}

  ngOnInit(): void {
    this.guardService.guardRecycler();
    this.loadMaterialRequests();
  }

  loadMaterialRequests(skip: number = 0, limit: number = 10): void {
    this.apiservice.getMaterialRequests(skip, limit).subscribe({
      next: (data) => {
        this.materialRequests.set(data); // Asignar los datos a la señal
      },
      error: (err) => console.error('Error al obtener solicitudes de materiales:', err),
    });
  }

  routeToSeeRequest(id: string): void {
    this.router.navigate([`/recycler/seerequest`, id]);
  }
  


}
