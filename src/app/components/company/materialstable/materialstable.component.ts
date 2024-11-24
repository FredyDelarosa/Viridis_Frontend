import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from '../../../services/apiservice.service';
import { Observable } from 'rxjs';
import { DialogUpdatematerialComponent } from '../dialogs-materials/dialog-updatematerial/dialog-updatematerial.component';
import { DialogDeletematerialComponent } from '../dialogs-materials/dialog-deletematerial/dialog-deletematerial.component';

export interface Material {
  nombre: string;
  cantidad: number;
}

@Component({
  selector: 'app-materialstable',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './materialstable.component.html',
  styleUrls: ['./materialstable.component.scss']
})
export class MaterialstableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'cantidad', 'acciones'];
  dataSource: Material[] = []; // Inicializamos vacío
  readonly dialog = inject(MatDialog);
  private apiService = inject(ApiserviceService);

  ngOnInit(): void {
    this.loadMaterials();
  }

  loadMaterials(): void {
    const id_empresa = localStorage.getItem('user_id');
    if (id_empresa) {
      this.apiService.getMaterialsByCompany(id_empresa).subscribe(
        (response: any[]) => {
          this.dataSource = response.map(material => ({
            nombre: material.nombre_material, // Asegúrate de que el backend retorne "nombre_material"
            cantidad: material.cantidad,
          }));
        },
        (error) => {
          console.error('Error al cargar los materiales:', error);
        }
      );
    } else {
      console.error('No se encontró el ID de la empresa.');
    }
  }
  

  updateMaterial(material: any): void {
    const dialogRef = this.dialog.open(DialogUpdatematerialComponent, {
      data: { ...material } // Pasa el material seleccionado al diálogo
    });
  
    dialogRef.afterClosed().subscribe((updatedData) => {
      if (updatedData) {
        const id_material = material.id_material; // Asegúrate de que el ID esté presente en el material
        this.apiService.updateMaterial(id_material, updatedData).subscribe(
          () => {
            this.loadMaterials(); // Recargar la tabla
            console.log('Material actualizado exitosamente');
          },
          (error) => {
            console.error('Error al actualizar el material:', error);
          }
        );
      }
    });
  }

  deleteMaterial(material: any): void {
    const dialogRef = this.dialog.open(DialogDeletematerialComponent, {
      data: { nombre: material.nombre } // Pasa el nombre del material al diálogo
    });
  
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        const id_material = material.id_material;
        this.apiService.deleteMaterial(id_material).subscribe(
          () => {
            this.loadMaterials(); // Recargar la tabla
            console.log('Material eliminado exitosamente');
          },
          (error) => {
            console.error('Error al eliminar el material:', error);
          }
        );
      }
    });
  }
}
