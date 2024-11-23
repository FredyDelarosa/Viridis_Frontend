import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

export interface Admins {
  nombre: string;
  cantidad: number;
  material: string;
  ganancias: string;
}

const ELEMENT_DATA: Admins[] = [
  {nombre: "VIRIDIS", cantidad: 12, material: "Plástico", ganancias: "$12"},
  {nombre: "ECOCE", cantidad: 23, material: "Aluminio", ganancias: "$13"},
  {nombre: "CONEJO", cantidad: 5, material:"Pet", ganancias: "$44"},
  {nombre: "VERDE", cantidad: 12, material: "Periódico", ganancias: "$5"},
]

@Component({
  selector: 'app-agreementstable',
  standalone: true,
  imports: [ 
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './agreementstable.component.html',
  styleUrl: './agreementstable.component.scss'
})
export class AgreementstableComponent {
  displayedColumns: string[] = [ 'nombre', 'material','cantidad', 'ganancias'];
  dataSource = ELEMENT_DATA;
}