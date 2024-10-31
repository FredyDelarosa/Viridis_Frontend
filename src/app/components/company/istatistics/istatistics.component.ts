import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { HeaderCompanyComponent } from '../header-company/header-company.component';


@Component({
  selector: 'app-istatistics',
  standalone: true,
  imports: [ChartModule, HeaderCompanyComponent],
  templateUrl: './istatistics.component.html',
  styleUrl: './istatistics.component.scss'
})
export class IstatisticsComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Ventas',
          data: [30, 50, 80, 40, 60, 70, 90, 100, 110, 120, 130, 140],
          backgroundColor: '#42A5F5', // Color para las barras
          borderColor: '#1E88E5',
          borderWidth: 1,
        },
        {
          label: 'Gastos',
          data: [20, 30, 50, 20, 40, 60, 80, 90, 100, 110, 120, 130],
          backgroundColor: '#000000', // Otro color para las barras
          borderColor: '#FB8C00',
          borderWidth: 1,
        },
        {
          label: 'Utilidad',
          data: [20, 30, 50, 20, 40, 60, 80, 90, 100, 110, 120, 130],
          backgroundColor: '#FF3244', // Otro color para las barras
          borderColor: '#FB8C00',
          borderWidth: 1,
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
