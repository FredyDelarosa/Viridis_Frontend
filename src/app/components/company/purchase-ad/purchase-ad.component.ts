import { Component } from '@angular/core';
import { HeaderCompanyComponent } from '../header-company/header-company.component'; 
import { FooterUsersComponent } from '../../users/footer-users/footer-users.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PaypalButtonComponent } from '../../users/paypal-button/paypal-button.component';
import { ApiserviceService } from '../../../services/apiservice.service';


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

  constructor(private fb: FormBuilder, private apiservice: ApiserviceService) {
    this.adForm = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(200)]],
      image: ['', Validators.required],
    });
  }

  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Aquí se guarda el archivo en el control del formulario
      this.adForm.patchValue({ image: file });
      this.adForm.get('image')?.updateValueAndValidity();
      console.log('Archivo seleccionado:', file);
    } else {
      console.error('No se seleccionó un archivo válido.');
    }
  }
  
    

  onPaymentSuccess(): void {
    this.paymentSuccess = true;
    console.log('Pago completado, se activa el servicio.');
  }

  onSubmit(): void {
    if (this.adForm.valid && this.paymentSuccess) {
      const formData = new FormData();
      
      // Obtén el UUID real del contexto (por ejemplo, desde el localStorage o una API)
      const idEmpresa = localStorage.getItem('user_id') || 'ID_REAL_DE_LA_EMPRESA';
      
      formData.append('id_empresa', idEmpresa); // Asegúrate de enviar un UUID válido
      formData.append('contenido_anuncio', this.adForm.get('description')?.value);
      formData.append('file', this.adForm.get('image')?.value);
  
      this.apiservice.createAd(formData).subscribe(
        (response) => {
          console.log('Anuncio creado:', response);
          alert('¡Anuncio creado con éxito!');
          this.adForm.reset();
        },
        (error) => {
          console.error('Error al crear el anuncio:', error);
          alert('Hubo un problema al crear el anuncio.');
        }
      );
    } else if (!this.paymentSuccess) {
      alert('Debes completar el pago para publicar el anuncio.');
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
  

}
