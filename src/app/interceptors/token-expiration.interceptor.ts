import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiserviceService } from '../services/apiservice.service';

export const tokenExpirationInterceptor: HttpInterceptorFn = (req, next) => {
  const apiservice = inject(ApiserviceService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  // Obtén el token del servicio
  const token = apiservice.getToken();

  if (token) {
    const isValid = apiservice.isTokenValid(); // Verifica si el token sigue siendo válido

    if (!isValid) {
      // Si el token ha expirado, elimínalo y redirige al login
      apiservice.clearToken();
      snackBar.open('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.', 'Cerrar', {
        duration: 5000,
      });
      setTimeout(() => router.navigate(['/login']), 0);
      throw new Error('Token expirado.'); // Detiene la ejecución del interceptor
    }

    // Si el token es válido, añade el encabezado Authorization
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
