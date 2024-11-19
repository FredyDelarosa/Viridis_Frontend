import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public url = 'http://127.0.0.1:8000/'; // Cambia el puerto si es necesario
  token:any = ''

  constructor(private http: HttpClient) { }

  //Aqui se implemento el metodo para el inicio de Sesion
  login(email: string,password:string): Observable<any> {
    const params = new HttpParams()
    .set('email', email)
    .set('password', password);

  return this.http.post(this.url+'login',null, { params });
  }
}
