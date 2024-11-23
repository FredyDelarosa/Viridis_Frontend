import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header-recycler',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-recycler.component.html',
  styleUrl: './header-recycler.component.scss'
})
export class HeaderRecyclerComponent {
  constructor(private router:Router){}
  
  routeToCommunity(){
    this.router.navigate(["recycler/community"])
  }


}
