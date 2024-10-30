import { Routes } from '@angular/router';

//Users
import { IchoseRolComponent } from './components/users/ichose-rol/ichose-rol.component';
//Company
import { ImaterialsRequestComponent } from './components/company/imaterials-request/imaterials-request.component';



export const routes: Routes = [
    {path: "materials", component: ImaterialsRequestComponent, pathMatch: "full"},
    {path: "chose", component: IchoseRolComponent, pathMatch:"full"  },
];
