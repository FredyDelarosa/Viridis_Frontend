import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ApiserviceService } from '../../../services/apiservice.service';
import { DialogdeleteadminComponent } from '../dialogsadmin/dialogdeleteadmin/dialogdeleteadmin.component';
import { DialogupdateadminComponent } from '../dialogsadmin/dialogupdateadmin/dialogupdateadmin.component';

export interface Admins {
  id_administrador: string; // El ID del administrador debe coincidir con el backend
  usuario: string; // Cambiar nombre a 'usuario' para coincidir con la respuesta del backend
}

@Component({
  selector: 'app-adminstable',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './adminstable.component.html',
  styleUrls: ['./adminstable.component.scss']
})
export class AdminstableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'usuario', 'acciones'];
  dataSource: Admins[] = [];

  readonly dialog = inject(MatDialog);
  private apiService = inject(ApiserviceService);

  ngOnInit(): void {
    this.loadAdministrators();
  }

  loadAdministrators(): void {
    this.apiService.getAdministrators().subscribe({
      next: (admins: Admins[]) => {
        this.dataSource = admins; // Asignar datos recibidos al dataSource
      },
      error: (error) => {
        console.error('Error al cargar administradores:', error);
      }
    });
  }

  deleteAdmin(admin: Admins): void {
    const dialogRef = this.dialog.open(DialogdeleteadminComponent, {
      data: { admin },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si el resultado es verdadero, recargar la lista
        this.loadAdministrators();
      }
    });
  }
  
  updateAdmin(admin: Admins): void {
    const dialogRef = this.dialog.open(DialogupdateadminComponent, {
      data: { admin }, // Pasamos todo el objeto administrador
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadAdministrators(); // Recargar la lista después de la actualización
      }
    });
  }
  
  
}
