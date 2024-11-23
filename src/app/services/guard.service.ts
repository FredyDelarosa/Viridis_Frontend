import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router: Router) {}

  guardAdmin(): void {
    const rol = localStorage.getItem("rol");
    if (rol === "empresa") {
      this.router.navigate(['/admin/myteam']);
      const auxRol = "administrador";
      localStorage.setItem("rol", auxRol);
    } else if (rol === "reciclador") {
      this.router.navigate(['/admin/myteam']);
      const auxRol = "administrador";
      localStorage.setItem("rol", auxRol);
    }
  }

  guardRecycler(): void{
    const rol = localStorage.getItem("rol");
    if (rol === "administrador") {
      this.router.navigate(["/recycler/community"]);
      const auxRol = "reciclador";
      localStorage.setItem("rol", auxRol);
    } else if (rol === "empresa"){
      this.router.navigate(["/recycler/community]"])
      const auxRol = "reciclador";
      localStorage.setItem("rol", auxRol);
    }
  }

  guardCompany(): void{
    const rol = localStorage.getItem("rol");
    if (rol === "administrador") {
      this.router.navigate(["/company/community"]);
      const auxRol = "empresa";
      localStorage.setItem("rol", auxRol);
    } else if (rol === "reciclador"){
      this.router.navigate(["/company/community"]);
      const auxRol = "empresa";
      localStorage.setItem("rol", auxRol);
    }
  }

  // guardUsers(): void{
  //   const rol = localStorage.getItem("rol");
  //   let auxRol = " ";
  //   if (rol === "administrador") {
  //     this.router.navigate(["/login"]);
  //     auxRol = "";
  //     localStorage.setItem("rol", auxRol);
  //   } else if (rol === "reciclador"){
  //     this.router.navigate(["/recycler/community"]);
  //     auxRol = "reciclador";
  //     localStorage.setItem("rol", auxRol);
  //   } else if (rol === "empresa"){
  //     this.router.navigate(["/company/community"]);
  //     auxRol = "empresa";
  //     localStorage.setItem("rol", auxRol);
  // }
}

  // guardRecyclerandCompany(): void{
  //   const rol = localStorage.getItem("rol");
  //   let auxRol = ""
  //   if (rol === "empresa" || rol === "reciclador"){
  //     auxRol = rol
  //     localStorage.setItem('rol', auxRol)
  //     this.router.navigate(["/community"]);
  //   } else {
  //     localStorage.setItem('rol', auxRol)
  //     this.router.navigate(['/community']);
  //   }
  // }

