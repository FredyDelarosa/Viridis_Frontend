import { Routes } from '@angular/router';

//Users
import { IloginComponent } from './components/users/ilogin/ilogin.component';
import { IchoseRolComponent } from './components/users/ichose-rol/ichose-rol.component';
//Admin
import { IseeCompanyRequestComponent } from './components/admin/isee-company-request/isee-company-request.component';
//Company
import { IregisterCompanyComponent } from './components/company/iregister-company/iregister-company.component';
import { IstatisticsComponent } from './components/company/istatistics/istatistics.component';
import { ImaterialsRequestComponent } from './components/company/imaterials-request/imaterials-request.component';
import { IrequestAdvertisementComponent } from './components/company/irequest-advertisement/irequest-advertisement.component';



export const routes: Routes = [
    {path: "login", component: IloginComponent, pathMatch: "full"},
    {path: "seecompany", component: IseeCompanyRequestComponent, pathMatch: "full"},
    {path: "registercompany", component: IregisterCompanyComponent, pathMatch:"full"},
    {path: "xs", component: IstatisticsComponent, pathMatch:"full"},
    {path: "materials", component: ImaterialsRequestComponent, pathMatch: "full"},
    {path: "chose", component: IchoseRolComponent, pathMatch:"full"  }, //concluida


    {path: "publicity", component: IrequestAdvertisementComponent, pathMatch:"full"  },


];
