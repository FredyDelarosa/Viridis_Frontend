import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TidioService {
  private isScriptLoaded = false;

  constructor() {}

  // Método para borrar cookies y datos de localStorage relacionados con Tidio
  private clearTidioData(): void {
    // Eliminar cookies relacionadas con Tidio
    document.cookie
      .split(';')
      .forEach((cookie) => {
        const name = cookie.split('=')[0].trim();
        if (name.includes('tidio')) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
      });

    // Eliminar datos de localStorage relacionados con Tidio
    for (const key in localStorage) {
      if (key.includes('tidio')) {
        localStorage.removeItem(key);
      }
    }

    console.log('Historial de Tidio borrado');
  }

  // Método para cargar el script de Tidio
  loadTidioChat(): void {
    // Limpia los datos antes de cargar el script
    this.clearTidioData();

    if (this.isScriptLoaded) return; // Evita cargarlo más de una vez

    // Crear un elemento <script> para cargar el script de Tidio
    const script = document.createElement('script');
    script.src = "//code.tidio.co/owbxlczbcb33qno5aoxpi0yua4i5u9h2.js"; // Reemplaza con tu clave de Tidio
    script.async = true; // Carga asíncrona para no bloquear la ejecución
    script.onload = () => {
      this.isScriptLoaded = true;
      console.log('Tidio chat cargado');
    };

    // Agregar el script a la etiqueta <head> del documento
    document.head.appendChild(script);
  }

  // Método para configurar tidioIdentify
  setTidioIdentify(userData: TidioIdentify): void {
    if (!this.isScriptLoaded) {
      console.error('El script de Tidio aún no se ha cargado.');
      return;
    }

    (document as any).tidioIdentify = userData;
    console.log('TidioIdentify configurado:', userData);
  }
}

// Declaración de la interfaz para tidioIdentify
export interface TidioIdentify {
  distinct_id: string; // ID único del visitante
  name: string;        // Nombre del visitante
}
