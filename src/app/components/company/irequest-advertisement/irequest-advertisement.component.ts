import { Component } from '@angular/core';
import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-irequest-advertisement',
  standalone: true,
  imports: [
    HeaderCompanyComponent,
     FooterUsersComponent,
  ],
  templateUrl: './irequest-advertisement.component.html',
  styleUrl: './irequest-advertisement.component.scss'
})
export class IrequestAdvertisementComponent {
  constructor(private router:Router){}

  companyName: string = '';
  duration: number | null = null;
  startDate: string = '';
  endDate: string = '';
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      console.log('Empresa:', this.companyName);
      console.log('Duración:', this.duration);
      console.log('Fecha de inicio:', this.startDate);
      console.log('Fecha de finalización:', this.endDate);
      console.log('Archivo:', this.selectedFile.name);
      // Aquí puedes manejar la lógica para enviar la información y el archivo al backend
    } else {
      console.log('Por favor, selecciona un archivo.');
    }
  }

  routeToPayPal(){
    this.router.navigate(["/paypal"])

  }

}
