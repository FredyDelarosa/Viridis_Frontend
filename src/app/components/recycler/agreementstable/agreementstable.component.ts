import { Component, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agreementstable',
  standalone: true,
  imports: [MatIconModule, MatTableModule, CommonModule],
  templateUrl: './agreementstable.component.html',
  styleUrl: './agreementstable.component.scss',
})
export class AgreementstableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'material', 'cantidad', 'ganancias'];
  dataSource = signal<any[]>([]); // Usar signals para manejo de estado reactivo

  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    const idReciclador = localStorage.getItem('user_id');
    if (!idReciclador) {
      console.error('No se encontró el ID del reciclador en localStorage.');
      return;
    }

    // Llamar al servicio para obtener las transacciones del usuario
    this.apiservice.getUserTransactions(idReciclador).subscribe({
      next: (transacciones) => {
        console.log('Transacciones obtenidas:', transacciones);
        this.dataSource.set(transacciones); // Actualizar la fuente de datos
      },
      error: (err) => {
        console.error('Error al obtener las transacciones:', err);
      },
    });
  }
}
