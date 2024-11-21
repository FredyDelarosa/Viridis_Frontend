import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


export interface Admins {
  nombre: string;
  dueno: string;
}

const ELEMENT_DATA: Admins[] = [
  {nombre: "VIRIDIS", dueno: 'Fredy',},
  {nombre: "ECOCE", dueno: 'Osvaldo', },
  {nombre: "CONEJO", dueno: 'Hannia', },
  {nombre: "VERDE", dueno: 'Zaca', },
]
@Component({
  selector: 'app-businesstable',
  standalone: true,
  imports: [ MatTableModule, MatIconModule],
  templateUrl: './businesstable.component.html',
  styleUrl: './businesstable.component.scss'
})

export class BusinesstableComponent {
  displayedColumns: string[] = [ 'nombre', 'dueno','acciones'];
  dataSource = ELEMENT_DATA;
}