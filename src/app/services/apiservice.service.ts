import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  public url = 'http://127.0.0.1:8000/'; // Cambia el puerto si es necesario
  private readonly TOKEN_KEY = 'token';
  private readonly TOKEN_TIMESTAMP_KEY = 'tokenTimestamp';
  private readonly TOKEN_LIFETIME = 2 * 60 * 1000; // 2 minutos
  private readonly TOKEN_CHECK_INTERVAL = 10 * 1000; // Cada 10 segundos
  private tokenCheckInterval: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Método para el inicio de sesión
  login(email: string, password: string): Observable<any> {
    this.clearToken();
    this.startTokenCheck();
    
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.post(`${this.url}login`, null, { params });
  }

  // Método para iniciar la verificación periódica del token
  startTokenCheck(): void {
    this.stopTokenCheck(); // Asegúrate de no tener múltiples intervalos activos
    this.tokenCheckInterval = setInterval(() => {
      if (!this.isTokenValid()) {
        this.clearToken();
        this.router.navigate(['/login']);
      }
    }, this.TOKEN_CHECK_INTERVAL);
  }

  // Método para detener la verificación periódica
  stopTokenCheck(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
      this.tokenCheckInterval = null;
    }
  }

  // Guardar el token y su tiempo de expiración en localStorage
  setToken(token: string): void {
    const expirationTimestamp = Date.now() + this.TOKEN_LIFETIME;
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.TOKEN_TIMESTAMP_KEY, expirationTimestamp.toString());
  }

  // Obtener el token desde localStorage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Verificar si el token aún es válido
  isTokenValid(): boolean {
    const tokenTimestamp = localStorage.getItem(this.TOKEN_TIMESTAMP_KEY);
    if (!tokenTimestamp) return false;

    return Date.now() < parseInt(tokenTimestamp, 10);
  }

  // Eliminar el token de localStorage
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_TIMESTAMP_KEY);
    localStorage.removeItem('rol');
  }
}
