import { AfterViewInit, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paypal-button',
  standalone: true,
  template: `<div id="paypal-button-container"></div>`,
  styleUrl: './paypal-button.component.scss'
})
export class PaypalButtonComponent implements AfterViewInit {
  @Input() amount!: number;
  @Input() context: 'donation' | 'service' = 'donation';  // Nueva propiedad para diferenciar el contexto
  @Output() paymentSuccess = new EventEmitter<void>();  // Emite el evento cuando el pago es exitoso

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Verifica si estamos en el navegador y no en el servidor (como SSR)
      if (!this.amount) {
        console.error('Error: No se ha proporcionado un monto para el pago.');
        return;
      }

      // Cargar el SDK de PayPal
      this.loadPaypalScript().then(() => {
        // @ts-ignore: PayPal SDK global variable
        paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.amount.toString(), // Convertir el monto a string
                  },
                },
              ],
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              // Si el contexto es 'service', emitimos el evento de éxito del pago
              if (this.context === 'service') {
                this.paymentSuccess.emit(); // Emitir el evento de éxito
              }
              alert(`¡Pago completado por ${details.payer.name.given_name}!`);
              console.log('Detalles del pago:', details);
            });
          },
          onError: (err: any) => {
            console.error('Error durante el pago:', err);
          },
        }).render('#paypal-button-container');
      });
    } else {
      console.warn('El entorno no es adecuado para ejecutar el código de PayPal');
    }
  }

  private loadPaypalScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Verificar si ya se ha cargado el script
      if (document.getElementById('paypal-script')) {
        resolve();
        return;
      }

      // Crear el script y agregarlo al DOM
      const script = document.createElement('script');
      script.id = 'paypal-script';
      script.src = 'https://www.paypal.com/sdk/js?client-id=AZUeTQPNmewl46f4w0l1f3r1CwYi5gO4uyFhDA6XR5EfU3hRo2zuAxhEqeTkv-lGhTm8DaMSdEZreyMZ&currency=USD';
      script.onload = () => resolve();
      script.onerror = (error) => reject('Error al cargar el script de PayPal: ' + error);
      document.body.appendChild(script);
    });
  }
}



