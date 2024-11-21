import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DialogdeleteadminComponent } from '../dialogsadmin/dialogdeleteadmin/dialogdeleteadmin.component';
import { DialogupdateadminComponent } from '../dialogsadmin/dialogupdateadmin/dialogupdateadmin.component';

export interface Admins {
  nombre: string;
  id: number;
}

const ELEMENT_DATA: Admins[] = [
  {id: 1, nombre: 'Osvaldo Ochoa',},
  {id: 2, nombre: 'Fredy De la rosa', },
  {id: 2, nombre: 'Fredy De la rosa', },
  {id: 2, nombre: 'Fredy De la rosa', },
  {id: 1, nombre: 'Osvaldo Ochoa',},
  {id: 2, nombre: 'Fredy De la rosa', },
  {id: 2, nombre: 'Fredy De la rosa', },
  {id: 2, nombre: 'Fredy De la rosa', },
  
  
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

    readonly dialog = inject(MatDialog);
    deleteAdmin(): void {
      const dialogRef = this.dialog.open(DialogdeleteadminComponent, {
        data: {},
      });
    }

    updateAdmin(): void {
      const dialogRef = this.dialog.open(DialogupdateadminComponent, {
        data: {},
      });
    }
}
