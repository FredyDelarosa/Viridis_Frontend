import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../../admin/header-admin/header-admin.component';

@Component({
  selector: 'app-irequest-advertisement',
  standalone: true,
  imports: [
    HeaderAdminComponent,
    
  ],
  templateUrl: './irequest-advertisement.component.html',
  styleUrl: './irequest-advertisement.component.scss'
})
export class IrequestAdvertisementComponent implements OnInit {
  ngOnInit(): void {
    this.setMinDate();
  }

  setMinDate(): void {
const today = new Date();

const formattedDate = today.toISOString().split('T')[0];
const inicioInput = document.getElementById('inicio') as HTMLInputElement;
const finalInput = document.getElementById('final') as HTMLInputElement;

if (inicioInput && finalInput) {
    inicioInput.min = formattedDate;  
    finalInput.min = formattedDate;  
}

}
}

