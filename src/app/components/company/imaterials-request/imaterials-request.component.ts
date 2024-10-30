import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogImaterialsRequestComponent } from '../dialog-imaterials-request/dialog-imaterials-request.component';
import { HeaderCompanyComponent } from '../header-company/header-company.component';

@Component({
  selector: 'app-imaterials-request',
  standalone: true,
  imports: [
    HeaderCompanyComponent
  ],
  templateUrl: './imaterials-request.component.html',
  styleUrl: './imaterials-request.component.scss'
})
export class ImaterialsRequestComponent {

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogImaterialsRequestComponent, {
    
    });
  }

}









