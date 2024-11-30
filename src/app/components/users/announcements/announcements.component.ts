import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../services/apiservice.service';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  public announcements: any[] = [];

  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }
  
  loadAnnouncements(): void {
    this.apiservice.getAnnouncements().subscribe({
      next: (data) => {
        const explicitBaseUrl = 'http://127.0.0.1:8000/uploads/anuncios/'; // Ruta explícita
        this.announcements = data.map((announcement: any) => {
          const fullUrl = explicitBaseUrl + announcement.imagen_url;
          console.log('URL generada:', fullUrl); // Verificar las URLs generadas
          return {
            ...announcement,
            imagen_url: fullUrl,
          };
        });
      },
      error: (err) => {
        console.error('Error al cargar anuncios', err);
      },
    });
  }
  
}
