import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  public url = 'http://127.0.0.1:8000/'; // Cambia el puerto si es necesario
  private readonly TOKEN_KEY = 'token';
  private readonly TOKEN_TIMESTAMP_KEY = 'tokenTimestamp';
  private readonly TOKEN_LIFETIME = 90 * 60 * 1000; // 2 minutos
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

  return this.http.post(`${this.url}login`, null, { params }).pipe(
    tap((response: any) => {
      if (response.access_token && response.user_id) {
        // Guardar el token y el ID del usuario en el localStorage
        this.setToken(response.access_token);
        localStorage.setItem('user_id', response.user_id);
      }
    })
  );
}

  registerRecycler(data: any): Observable<any> {
    return this.http.post(`${this.url}usuarios/reciclador`, data);
  }
  

  addMaterialRequest(data: { nombre_material: string; cantidad: number; id_empresa: string }): Observable<any> {
    const id_empresa = data.id_empresa; // Extraemos el ID de la empresa
    const payload = { nombre_material: data.nombre_material, cantidad: data.cantidad }; // Cuerpo del request
  
    return this.http.post(`${this.url}materiales/materiales?id_empresa=${id_empresa}`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getMaterialsByCompany(id_empresa: string): Observable<any> {
    return this.http.get(`${this.url}materiales/materialesbycompany`, {
      params: { id_empresa },
    });
  }
  

  createMaterialRequest(formData: FormData): Observable<any> {
    return this.http.post(`${this.url}materiales/solicitudes`, formData);
  }

  updateMaterial(id_material: string, data: { nombre_material?: string; cantidad?: number }): Observable<any> {
    return this.http.put(`${this.url}materiales/materiales/${id_material}`, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }  

  deleteMaterial(id_material: string): Observable<any> {
    return this.http.delete(`${this.url}materiales/materiales/${id_material}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  } 

  // Crear publicación
  createPublication(data: FormData): Observable<any> {
    return this.http.post(`${this.url}publicaciones/`, data);
  }
  

  // Obtener publicaciones de un usuario específico
  getPublicationsByUser(userId: string): Observable<any> {
    console.log(`Solicitando publicaciones para el usuario: ${userId}`); // Agrega este log
    return this.http.get(`${this.url}publicaciones/user`, {
      params: { id_usuario: userId },
    });
  }

  getAllPublications(): Observable<any> {
    return this.http.get(`${this.url}publicaciones/`);
  }

  getMaterialRequestByCompany(id_empresa: string): Observable<any>{
    return this.http.get(`${this.url}materiales/solicitudes_empresa`, {
      params: {id_empresa},
    });
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
