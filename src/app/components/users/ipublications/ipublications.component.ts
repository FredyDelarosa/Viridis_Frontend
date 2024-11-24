import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCompanyComponent } from '../../company/header-company/header-company.component';
import { HeaderRecyclerComponent } from '../../recycler/header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { DialogAddpublicationComponent } from '../dialogs-publications/dialog-addpublication/dialog-addpublication.component';
import { DialogUpdatepublicationComponent } from '../dialogs-publications/dialog-updatepublication/dialog-updatepublication.component';
import { DialogDeletepublicationComponent } from '../dialogs-publications/dialog-deletepublication/dialog-deletepublication.component';
import { MatDialog, } from '@angular/material/dialog';
import { GuardService } from '../../../services/guard.service';
import { ApiserviceService } from '../../../services/apiservice.service';

@Component({
  selector: 'app-ipublications',
  standalone: true,
  imports: [HeaderCompanyComponent, HeaderRecyclerComponent ,FooterUsersComponent, CommonModule],
  templateUrl: './ipublications.component.html',
  styleUrl: './ipublications.component.scss'
})
export class IpublicationsComponent {
  publications: any[] = [];

  constructor(private apiservice: ApiserviceService) {}

  readonly dialog = inject(MatDialog);

  addPublication(): void {
    const dialogRef = this.dialog.open(DialogAddpublicationComponent , {
      data: {},
    });
  }

  updatePublication(): void {
    const dialogRef = this.dialog.open(DialogUpdatepublicationComponent , {
      data: {},
    });
  }

  deletePublication(): void {
    const dialogRef = this.dialog.open(DialogDeletepublicationComponent , {
      data: {},
    });
  }

  public myRol: string = ''; // Inicializa el rol como cadena vacía
  ngOnInit(): void {
    const aux = localStorage.getItem('rol'); // Obtiene el rol del localStorage
    this.myRol = aux ? aux : ''; // Asigna el valor si existe, de lo contrario, una cadena vacía
    const userId = localStorage.getItem('user_id') || '';
    if (userId) {
      this.apiservice.getPublicationsByUser(userId).subscribe({
        next: (data) => {
          this.publications = data;
        },
        error: (err) => {
          console.error('Error al obtener publicaciones', err);
        },
      });
    }
  }

}
