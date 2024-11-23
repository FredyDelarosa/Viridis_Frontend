import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';

import { GuardService } from '../../../services/guard.service';

@Component({
  selector: 'app-isee-company-request',
  standalone: true,
  imports: [HeaderAdminComponent],
  templateUrl: './isee-company-request.component.html',
  styleUrl: './isee-company-request.component.scss'
})
export class IseeCompanyRequestComponent {
  constructor(private guardService: GuardService) {}

  ngOnInit(): void {
    this.guardService.guardAdmin();
  }
  

}
