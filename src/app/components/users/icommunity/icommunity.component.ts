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
  styleUrl: './icommunity.component.scss'
})
export class IcommunityComponent implements OnInit{
  public myRol: string = ''; // Inicializa el rol como cadena vacía
  public publications: any[] = [];

  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    const aux = localStorage.getItem('rol'); // Obtiene el rol del localStorage
    this.myRol = aux ? aux : ''; // Asigna el valor si existe, de lo contrario, una cadena vacía

    this.apiservice.getAllPublications().subscribe({
      next: (data) =>{
        this.publications = data;
      },
      error: (err) => {
        console.error('Algo salio mal papu')
      },
    });
  }
}
