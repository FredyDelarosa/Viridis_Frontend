import { Component, inject } from '@angular/core';

import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

import { DialogAddmaterialrequestComponent } from '../dialog-materialrequest/dialog-addmaterialrequest/dialog-addmaterialrequest.component';
import { DialogUpdatematerialrequestComponent } from '../dialog-materialrequest/dialog-updatematerialrequest/dialog-updatematerialrequest.component';
import { DialogDeletematerialrequestComponent } from '../dialog-materialrequest/dialog-deletematerialrequest/dialog-deletematerialrequest.component';
import { MatDialog, } from '@angular/material/dialog';
import { GuardService } from '../../../services/guard.service';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../../services/apiservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-imaterials-request',
  standalone: true,
  imports: [HeaderCompanyComponent, FooterUsersComponent, FormsModule, CommonModule  ],
  templateUrl: './imaterials-request.component.html',
  styleUrl: './imaterials-request.component.scss'
})
export class ImaterialsRequestComponent {
  readonly dialog = inject(MatDialog);
  materialRequest: any[] = [];

  constructor(private router:Router, private guardService:GuardService, private apiservice: ApiserviceService){}

  ngOnInit(): void {
    const id_empresa = localStorage.getItem('user_id'); // Obtiene el ID de la empresa desde el localStorage
  
    if (id_empresa) {
      this.apiservice.getMaterialRequestByCompany(id_empresa).subscribe({
        next: (data) => {
          console.log("Datos recibidos del backend:", data); // Log de las solicitudes
          this.materialRequest = data;
        },
        error: (err) => {
          console.error("Error al cargar las solicitudes:", err);
        },
      });
    }
  }
  
  onImageError(event: Event): void {
    console.error('Error cargando imagen:', event);
  }
  

  addMaterialRequest(): void {
    const dialogRef = this.dialog.open(DialogAddmaterialrequestComponent, {
      data: {},
    });
  }

  updateMaterialRequest(request: any): void {
    const dialogRef = this.dialog.open(DialogUpdatematerialrequestComponent, {
      data: request, // Pasa los datos de la solicitud al diálogo
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Si la solicitud fue actualizada, recarga la lista
        this.ngOnInit();
      }
    });
  }
  

  deleteMaterialRequest(id_solicitud: string): void {
    const dialogRef = this.dialog.open(DialogDeletematerialrequestComponent);
  
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.apiservice.deleteMaterialRequest(id_solicitud).subscribe({
          next: () => {
            console.log('Solicitud eliminada correctamente');
            // Actualiza la lista local eliminando el elemento eliminado
            this.materialRequest = this.materialRequest.filter(
              (request) => request.id_solicitud !== id_solicitud
            );
          },
          error: (err) => {
            console.error('Error al eliminar la solicitud:', err);
          },
        });
      }
    });
  }

}












