import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderCompanyComponent } from '../../company/header-company/header-company.component';
import { HeaderRecyclerComponent } from '../../recycler/header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { ApiserviceService } from '../../../services/apiservice.service';

@Component({
  selector: 'app-icommunity',
  standalone: true,
  imports: [HeaderRecyclerComponent, HeaderCompanyComponent, FooterUsersComponent, CommonModule],
  templateUrl: './icommunity.component.html',
  styleUrl: './icommunity.component.scss',
})
export class IcommunityComponent implements OnInit {
  public myRol: string = ''; // Inicializa el rol como cadena vacía
  public mixedContent: any[] = []; // Contendrá publicaciones y anuncios mezclados

  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    const aux = localStorage.getItem('rol'); // Obtiene el rol del localStorage
    this.myRol = aux ? aux : ''; // Asigna el valor si existe, de lo contrario, una cadena vacía

    // Cargar publicaciones y anuncios
    this.loadContent();

  }

  loadContent(): void {
    const publications$ = this.apiservice.getAllPublications();
    const announcements$ = this.apiservice.getAnnouncements();
  
    publications$.subscribe({
      next: (publications) => {
        const baseUrlPublications = this.apiservice.url + 'uploads/publicaciones/';
        const sortedPublications = publications
          .map((pub: any) => ({
            ...pub,
            type: 'publication',
            imagen_url: pub.imagen_url.startsWith('https') 
              ? pub.imagen_url.replace(':8000', '') // Elimina el puerto si está presente
              : baseUrlPublications + pub.imagen_url.replace('uploads/publicaciones/', ''),
          }))
          .sort((a: any, b: any) => new Date(b.fecha_creacion).getTime() - new Date(a.fecha_creacion).getTime());
  
        announcements$.subscribe({
          next: (announcements) => {
            const baseUrlAnnouncements = this.apiservice.url + 'uploads/anuncios/';
            const ads = announcements.map((ad: any) => ({
              ...ad,
              type: 'announcement',
              imagen_url: ad.imagen_url.startsWith('https') 
                ? ad.imagen_url.replace(':8000', '') // Elimina el puerto si está presente
                : baseUrlAnnouncements + ad.imagen_url.replace('uploads/anuncios/', ''),
            }));
  
            this.mixedContent = this.mixAnnouncementsWithPublications(sortedPublications, ads);
          },
          error: (err) => console.error('Error al cargar anuncios', err),
        });
      },
      error: (err) => console.error('Error al cargar publicaciones', err),
    });
  }
  
  
  
  
  // Método para mezclar anuncios aleatoriamente entre publicaciones
  mixAnnouncementsWithPublications(publications: any[], announcements: any[]): any[] {
    const mixedContent = [...publications];
    
    // Insertar cada anuncio en una posición aleatoria
    announcements.forEach((ad) => {
      const randomIndex = Math.floor(Math.random() * (mixedContent.length + 1));
      mixedContent.splice(randomIndex, 0, ad);
    });
  
    return mixedContent;
  }
  
  // Método para mezclar un array
  shuffleArray(array: any[]): any[] {
    return array
      .map((item) => ({ ...item, sort: Math.random() })) // Asigna un número aleatorio a cada elemento
      .sort((a, b) => a.sort - b.sort) // Ordena los elementos por el número aleatorio
      .map(({ sort, ...item }) => item); // Elimina el campo `sort`
  }
  
}
