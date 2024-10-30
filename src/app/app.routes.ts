import { Routes } from '@angular/router';

//Users
import { IloginComponent } from './components/users/ilogin/ilogin.component';
import { IchoseRolComponent } from './components/users/ichose-rol/ichose-rol.component';
//Company
import { IstatisticsComponent } from './components/company/istatistics/istatistics.component';
import { ImaterialsRequestComponent } from './components/company/imaterials-request/imaterials-request.component';



export const routes: Routes = [
    {path: "login", component: IloginComponent, pathMatch: "full"},
    {path: "xs", component: IstatisticsComponent, pathMatch:"full"},
    {path: "materials", component: ImaterialsRequestComponent, pathMatch: "full"},
    {path: "chose", component: IchoseRolComponent, pathMatch:"full"  },
];
