import { Component } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

export interface Admins {
  nombre: string;
  cantidad: number;
}

const ELEMENT_DATA: Admins[] = [
  {cantidad: 1, nombre: 'Osvaldo Ochoa',},
  {cantidad: 2, nombre: 'Fredy De la rosa', },
  {cantidad: 3, nombre: 'Zacarias bb', },
  {cantidad: 42, nombre: 'Zacarias bb', },
]
@Component({
  selector: 'app-materialstable',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './materialstable.component.html',
  styleUrl: './materialstable.component.scss'
})
export class MaterialstableComponent {
  displayedColumns: string[] = [ 'nombre', 'cantidad','acciones'];
  dataSource = ELEMENT_DATA;
}
