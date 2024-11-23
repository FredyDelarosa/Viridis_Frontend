import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { FooterUsersComponent } from '../footer-users/footer-users.component';
import { HeaderUsersComponent } from '../header-users/header-users.component';
import { ApiserviceService } from '../../../services/apiservice.service';

@Component({
  selector: 'app-ilogin',
  standalone: true,
  imports: [
    FormsModule, FooterUsersComponent, HeaderUsersComponent, RouterLink, RouterLinkActive],
  templateUrl: './ilogin.component.html',
  styleUrl: './ilogin.component.scss'
})
export class IloginComponent {
  //Aqui ultilizo el metodo de Login
  constructor (public apiservice : ApiserviceService, public router : Router){}

  correo: string = '';
  password: string = '';

ngOnInit(): void{}

login(email: string, password: string): void {
  this.apiservice.login(email, password).subscribe(
      (response) => {
          // Guarda el token en el localStorage
          localStorage.setItem('token', response.access_token);
          
          // Guarda el id_empresa si está disponible
          if (response.id_empresa) {
              localStorage.setItem('empresaId', response.id_empresa);
          }

          // Redirige al dashboard o a la página correspondiente
          this.router.navigate(['/dashboard']);
      },
      (error) => {
          console.error('Error al iniciar sesión:', error);
      }
  );
}


  onSubmit() {
    // console.log('Correo:', this.correo);
    // console.log('Contraseña:', this.password);
    // Aquí puedes llamar a un servicio para autenticar al usuario

      this.apiservice.login(this.correo, this.password).subscribe(response => {
      const token = response.access_token;
  
      // Guardar el token y manejar la redirección
      this.apiservice.setToken(token);
      const payload = token.split('.')[1];
      const decode = atob(payload);
      const aux = JSON.parse(decode);
      const rol = aux.tipo_usuario;
      localStorage.setItem('rol', rol);
      this.redirect(rol);
    }, error => {
      console.error('Error durante el inicio de sesión:', error);
      alert('Credenciales incorrectas o problema con el servidor.');
    });
  }

  redirect(rol:string):void{
    if(rol === "reciclador"){
      this.router.navigate(["/recycler/community"])
    } else if (rol === "empresa") {
      this.router.navigate(['/company/community'])
    } else if (rol === "administrador"){
      this.router.navigate(['/admin/myteam'])
    }
  } 
}
