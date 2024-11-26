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
        this.announcements = data.sort(
          (a: any, b: any) =>
            new Date(b.fecha_publicacion).getTime() -
            new Date(a.fecha_publicacion).getTime()
        );
      },
      error: (err) => {
        console.error('Error al cargar anuncios', err);
      },
    });
  }
}
