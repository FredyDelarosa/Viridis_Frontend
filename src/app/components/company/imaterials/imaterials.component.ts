import { Component, inject } from '@angular/core';

import { HeaderCompanyComponent } from '../header-company/header-company.component';
import { MaterialstableComponent } from '../materialstable/materialstable.component';
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';

import { DialogAddmaterialComponent } from '../dialogs-materials/dialog-addmaterial/dialog-addmaterial.component';
import { MatDialog, } from '@angular/material/dialog';
import { GuardService } from '../../../services/guard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-imaterials',
  standalone: true,
  imports: [HeaderCompanyComponent ,MaterialstableComponent, FooterUsersComponent],
  templateUrl: './imaterials.component.html',
  styleUrl: './imaterials.component.scss'
})
export class ImaterialsComponent {
  constructor(private router:Router, private guardService:GuardService){}
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.guardService.guardCompany();
  }

  addMaterial(): void {
    const dialogRef = this.dialog.open(DialogAddmaterialComponent, {
      data: {},
    });
  }

}
