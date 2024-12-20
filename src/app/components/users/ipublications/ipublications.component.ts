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

  loadPublications(): void {
    const userId = localStorage.getItem('user_id') || '';
    if (userId) {
      const baseUrlPublications = this.apiservice.url + 'uploads/publicaciones/';
      this.apiservice.getPublicationsByUser(userId).subscribe({
        next: (data) => {
          this.publications = data.map((pub: any) => {
            let imagen_url = pub.imagen_url;
            // Limpia el puerto 8000 si está presente
            if (imagen_url.includes(':8000')) {
              imagen_url = imagen_url.replace(':8000', '');
            }
            // Ajusta URLs relativas
            if (!imagen_url.startsWith('https')) {
              imagen_url = baseUrlPublications + imagen_url.replace('uploads/publicaciones/', '');
            }
            return { ...pub, imagen_url };
          });
        },
        error: (err) => console.error('Error al cargar publicaciones', err),
      });
    }
  }
  
  
  addPublication(): void {
    const dialogRef = this.dialog.open(DialogAddpublicationComponent , {
      data: {},
    });
  }

  updatePublication(publication: any): void {
    const dialogRef = this.dialog.open(DialogUpdatepublicationComponent, {
      data: {
        idPublicacion: publication.id,
        descripcion: publication.descripcion
      },
    });
  
    dialogRef.afterClosed().subscribe(() => {
      // Puedes refrescar la lista de publicaciones si es necesario
      this.loadPublications();
    });
  }
  

  deletePublication(publication: any): void {
    const dialogRef = this.dialog.open(DialogDeletepublicationComponent, {
      data: { idPublicacion: publication.id },
    });
  
    // Refresca la lista de publicaciones después de cerrar el diálogo
    dialogRef.afterClosed().subscribe(() => {
      this.loadPublications();
    });
  }

  public myRol: string = ''; // Inicializa el rol como cadena vacía
  ngOnInit(): void {
    const aux = localStorage.getItem('rol'); // Obtiene el rol del localStorage
    this.myRol = aux ? aux : ''; // Asigna el valor si existe, de lo contrario, una cadena vacía
    this.loadPublications();
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
