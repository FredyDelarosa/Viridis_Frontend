import { Routes } from '@angular/router';

import { ImaterialsRequestComponent } from './components/company/imaterials-request/imaterials-request.component';



export const routes: Routes = [
    {path: "materials", component: ImaterialsRequestComponent, pathMatch: "full"}
];
