import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { Router } from '@angular/router';
import { GuardService } from '../../../services/guard.service';


@Component({
  selector: 'app-istatistics',
  standalone: true,
  imports: [ChartModule, HeaderCompanyComponent, FooterUsersComponent],
  templateUrl: './istatistics.component.html',
  styleUrl: './istatistics.component.scss'
})
export class IstatisticsComponent {
  
  data: any;
  options: any;

  constructor(private router:Router, private guardService:GuardService) {
    this.data = {
      labels: ['Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Solicitudes Aprobadas',
          data: [15, 2],
          backgroundColor: '#42A5F5', // Color para las barras
        },
      ]
    };

    this.options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Cantidad',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Meses',
          },
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          enabled: true,
        }
      }
    };
  }

  ngOnInit(): void {
    this.guardService.guardCompany();
  }

}
