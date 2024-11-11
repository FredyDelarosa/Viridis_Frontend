import { Component } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

export interface Admins {
  nombre: string;
  id: number;
}

const ELEMENT_DATA: Admins[] = [
  {id: 1, nombre: 'Osvaldo Ochoa',},
  {id: 2, nombre: 'Fredy De la rosa', },
  {id: 3, nombre: 'Zacarias bb', },
]

@Component({
  selector: 'app-adminstable',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './adminstable.component.html',
  styleUrl: './adminstable.component.scss'
})
export class AdminstableComponent {
    displayedColumns: string[] = ['id', 'nombre', 'acciones',];
    dataSource = ELEMENT_DATA;
}
