import { Component, signal } from '@angular/core';
import { HeaderRecyclerComponent } from '../header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { GuardService } from '../../../services/guard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-iseerequest',
  standalone: true,
  imports: [HeaderRecyclerComponent, FooterUsersComponent, CommonModule, FormsModule],
  templateUrl: './iseerequest.component.html',
  styleUrls: ['./iseerequest.component.scss'],
})
export class IseerequestComponent {
  requestDetails = signal<any>(null);
  cantidad: number = 1; // Valor inicial de la cantidad

  constructor(
    private router: Router,
    private guardService: GuardService,
    private apiservice: ApiserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadRequestDetails(id);
    }
  }

  loadRequestDetails(id: string): void {
    this.apiservice.getRequestDetails(id).subscribe({
      next: (details) => {
        this.requestDetails.set(details);
      },
      error: (err) => console.error('Error al cargar los detalles:', err),
    });
  }

  acceptAndTransact(idSolicitud: string, cantidad: number): void {
    if (isNaN(cantidad) || cantidad <= 0) {
      alert('Por favor, ingresa una cantidad válida.');
      return;
    }

    const idReciclador = localStorage.getItem('user_id');
    if (!idReciclador) {
      console.error('No se encontró el ID del reciclador en localStorage');
      return;
    }

    console.log('Datos enviados:', {
      id_reciclador: idReciclador,
      id_solicitud: idSolicitud,
      cantidad_reciclada: cantidad,
    });

    this.apiservice.acceptAndTransact(idReciclador, idSolicitud, cantidad).subscribe({
      next: (response) => {
        console.log('Solicitud aceptada y transacción registrada:', response);
        alert("Solicitud de Material Aceptada.")
        this.router.navigate(['/success']);
      },
      error: (err) => console.error('Error al aceptar y transaccionar:', err),
    });
  }

  routeToChat() {
    this.router.navigate(['/chat']);
  }
}
