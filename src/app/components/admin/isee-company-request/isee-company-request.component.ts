import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../../../services/apiservice.service';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { GuardService } from '../../../services/guard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-isee-company-request',
  standalone: true,
  imports: [HeaderAdminComponent, CommonModule],
  templateUrl: './isee-company-request.component.html',
  styleUrl: './isee-company-request.component.scss',
})
export class IseeCompanyRequestComponent implements OnInit {
  empresa: any = null; // Almacena los datos de la empresa
  errorMessage: string = '';
  empresaId: string | null = null; // Almacena el ID de la empresa

  constructor(
    private guardService: GuardService,
    private apiService: ApiserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.guardService.guardAdmin();
    this.getEmpresaIdAndFetchDetails();
  }

  private getEmpresaIdAndFetchDetails(): void {
    this.empresaId = this.route.snapshot.paramMap.get('id_empresa');
    if (this.empresaId) {
      this.fetchCompanyDetails(this.empresaId);
    } else {
      this.errorMessage = 'No se encontró un ID de empresa válido en la URL.';
    }
  }

  private fetchCompanyDetails(empresaId: string): void {
    this.apiService.getCompanyDetails(empresaId).subscribe({
      next: (data) => {
        console.log('URL de la imagen:', data.imagen_empresa);
        

        this.empresa = {
          ...data,
          dueno_empresa: data['dueño_empresa'],
          imagen_empresa: data['imagen_empresa']
            ? `${this.apiService.url.replace(/\/+$/, '')}/${data['imagen_empresa'].replace(/^\/+/, '')}`
            : null,
        };
        
        console.log('URL final de la imagen:', this.empresa.imagen_empresa);

        delete this.empresa['dueño_empresa']; 
      },
      error: (err) => {
        console.error('Error al obtener los detalles de la empresa:', err);
        this.errorMessage = 'No se pudieron cargar los detalles de la empresa.';
      },
    });
    
  }
  

  authorizeAccess(): void {
    if (!this.empresaId) return;

    this.apiService.authorizeCompany(this.empresaId).subscribe({
      next: (response) => {
        alert(`La empresa ha sido aprobada exitosamente.`);
        this.empresa.estatus = 'aprobada'; // Actualiza el estatus en el frontend
        this.router.navigate(['/admin/business']);
      },
      error: (err) => {
        console.error('Error al aprobar la empresa:', err);
        alert('Hubo un error al aprobar la empresa.');
      },
    });
  }

  rejectAccess(): void {
    if (!this.empresaId) return;

    this.apiService.rejectCompany(this.empresaId).subscribe({
      next: (response) => {
        alert(`La empresa ha sido rechazada exitosamente.`);
        this.empresa.estatus = 'rechazada'; // Actualiza el estatus en el frontend
        this.router.navigate(['/admin/business']);
      },
      error: (err) => {
        console.error('Error al rechazar la empresa:', err);
        alert('Hubo un error al rechazar la empresa.');
      },
    });
  }
  
}
