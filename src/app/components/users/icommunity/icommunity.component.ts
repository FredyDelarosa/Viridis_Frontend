import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderCompanyComponent } from '../../company/header-company/header-company.component';
import { HeaderRecyclerComponent } from '../../recycler/header-recycler/header-recycler.component';
import { FooterUsersComponent } from '../footer-users/footer-users.component';

@Component({
  selector: 'app-icommunity',
  standalone: true,
  imports: [HeaderRecyclerComponent, HeaderCompanyComponent, FooterUsersComponent, CommonModule],
  templateUrl: './icommunity.component.html',
  styleUrl: './icommunity.component.scss'
})
export class IcommunityComponent implements OnInit{

  public isCompany:boolean = false;

  ngOnInit(): void {
    let aux: any = localStorage.getItem("isCompany")
    console.log(aux);
    
    this.isCompany =  Boolean(JSON.parse(aux)) ?? false
  }
}
