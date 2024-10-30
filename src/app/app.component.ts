import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IloginComponent } from './components/users/ilogin/ilogin.component';
import { HeaderCompanyComponent } from './components/company/header-company/header-company.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderCompanyComponent, IloginComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viridis-front';

 
}