import { Component } from '@angular/core';
import { HeaderCompanyComponent } from '../header-company/header-company.component'; 
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PaypalButtonComponent } from '../../users/paypal-button/paypal-button.component';


@Component({
  selector: 'app-purchase-ad',
  standalone: true,
  imports: [HeaderCompanyComponent, FooterUsersComponent,CommonModule,PaypalButtonComponent, ReactiveFormsModule],
  templateUrl: './purchase-ad.component.html',
  styleUrl: './purchase-ad.component.scss'
})
export class PurchaseAdComponent {
  adForm: FormGroup;
  paymentSuccess: boolean = false;

  constructor(private fb: FormBuilder) {
    this.adForm = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(200)]],
      image: ['', Validators.required],
    });
  }

  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.adForm.patchValue({ image: file });
      console.log('Imagen cargada:', file);
    }
  }

  onPaymentSuccess(): void {
    this.paymentSuccess = true;
    console.log('Pago completado, se activa el servicio.');
  }

  onSubmit(): void {
    if (this.adForm.valid && this.paymentSuccess) {
      console.log('Datos del anuncio:', this.adForm.value);
      alert('¡Anuncio creado con éxito!');
    } else if (!this.paymentSuccess) {
      alert('Debes completar el pago para publicar el anuncio.');
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }

}
