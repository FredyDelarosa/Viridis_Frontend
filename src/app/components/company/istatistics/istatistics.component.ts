import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';


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

  constructor() {
    this.data = {
      labels: ['Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Ventas',
          data: [30, 50, 140,],
          backgroundColor: '#42A5F5', // Color para las barras
        },
        {
          label: 'Gastos',
          data: [20, 30, 50,],
          backgroundColor: '#000000', // Otro color para las barras
          with: "30px",
        },
        {
          label: 'Utilidad',
          data: [20, 30, 50,],
          backgroundColor: '#FF3244', // Otro color para las barras
          with: "30px",
        }
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
}
