import { Routes } from '@angular/router';

//Users
import { IloginComponent } from './components/users/ilogin/ilogin.component';
import { IchoseRolComponent } from './components/users/ichose-rol/ichose-rol.component';
import { IcommunityComponent } from './components/users/icommunity/icommunity.component';
//Admin
import { IseeCompanyRequestComponent } from './components/admin/isee-company-request/isee-company-request.component';
import { ImyteamComponent } from './components/admin/imyteam/imyteam.component';
//Company
import { IregisterCompanyComponent } from './components/company/iregister-company/iregister-company.component';
import { IstatisticsComponent } from './components/company/istatistics/istatistics.component';
import { ImaterialsRequestComponent } from './components/company/imaterials-request/imaterials-request.component';
import { IrequestAdvertisementComponent } from './components/company/irequest-advertisement/irequest-advertisement.component';
import { ImaterialsComponent } from './components/company/imaterials/imaterials.component';




export const routes: Routes = [
    {path: "login", component: IloginComponent, pathMatch: "full"}, //concluida
    {path: "community", component: IcommunityComponent, pathMatch:"full"  },
    {path: "seecompany", component: IseeCompanyRequestComponent, pathMatch: "full"},
    {path: "registercompany", component: IregisterCompanyComponent, pathMatch:"full"}, //Falta respoonsive y modiificar el imput de tipo file
    {path: "xs", component: IstatisticsComponent, pathMatch:"full"},
    {path: "request", component: ImaterialsRequestComponent, pathMatch: "full"}, //se completo el Dialog de Agregar Solicitudes de Material, falta el resto del CRUD
    {path: "chose", component: IchoseRolComponent, pathMatch:"full"  }, //concluida a falta de responsive en las cards
    {path: "myteam", component: ImyteamComponent, pathMatch:"full"  },
    {path: "publicity", component: IrequestAdvertisementComponent, pathMatch:"full"  },
    {path: "materials", component: ImaterialsComponent, pathMatch:"full"  },


];
