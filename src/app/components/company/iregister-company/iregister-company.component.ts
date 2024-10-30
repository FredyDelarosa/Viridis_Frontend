import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-iregister-company',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule],
  templateUrl: './iregister-company.component.html',
  styleUrl: './iregister-company.component.scss'
})
export class IregisterCompanyComponent {
  value: string | undefined;

}
