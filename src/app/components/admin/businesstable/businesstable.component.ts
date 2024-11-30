import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../../services/apiservice.service';

export interface Admins {
  nombre: string;
  dueno: string;
}

@Component({
  selector: 'app-businesstable',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './businesstable.component.html',
  styleUrl: './businesstable.component.scss',
})
export class BusinesstableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'dueno', 'acciones'];
  dataSource: Admins[] = []; // Inicializa vacío

  constructor(private router: Router, private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.fetchPendingCompanies();
  }

  fetchPendingCompanies(): void {
    this.apiService.getPendingCompanies().subscribe({
      next: (companies: any[]) => {
        this.dataSource = companies.map((company) => ({
          id: company.id_empresa, // Incluye el ID aquí
          nombre: company.nombre_empresa,
          dueno: company.dueño_empresa,
        }));
      },
      error: (error) => {
        console.error('Error al obtener empresas pendientes:', error);
      },
    });
  }
  

  routeToSeeCompany(empresaId: String): void {
    this.router.navigate(['/admin/seecompany', {id_empresa: empresaId }]);
  }
}
