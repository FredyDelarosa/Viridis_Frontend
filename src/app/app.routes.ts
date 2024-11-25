import { Routes } from '@angular/router';

//Users
import { LandingPageComponent } from './components/users/landing-page/landing-page.component';
import { IloginComponent } from './components/users/ilogin/ilogin.component';
import { IchoseRolComponent } from './components/users/ichose-rol/ichose-rol.component';
import { IcommunityComponent } from './components/users/icommunity/icommunity.component';
import { IpublicationsComponent } from './components/users/ipublications/ipublications.component';
import { IchatComponent } from './components/users/ichat/ichat.component';
import { IpaypalComponent } from './components/users/ipaypal/ipaypal.component';
//Recycler
import { IregisterRecyclerComponent } from './components/recycler/iregister-recycler/iregister-recycler.component';
import { ImaterialsrecyclerComponent } from './components/recycler/imaterialsrecycler/imaterialsrecycler.component';
import { IseerequestComponent } from './components/recycler/iseerequest/iseerequest.component';
import { IagreementsComponent } from './components/recycler/iagreements/iagreements.component';
import { IdonationComponent } from './components/recycler/idonation/idonation.component';
//Admin
import { IseeCompanyRequestComponent } from './components/admin/isee-company-request/isee-company-request.component';
import { ImyteamComponent } from './components/admin/imyteam/imyteam.component';
import { IrequestBusinessComponent } from './components/admin/irequest-business/irequest-business.component';
//Company
import { IregisterCompanyComponent } from './components/company/iregister-company/iregister-company.component';
import { IstatisticsComponent } from './components/company/istatistics/istatistics.component';
import { ImaterialsRequestComponent } from './components/company/imaterials-request/imaterials-request.component';
import { IrequestAdvertisementComponent } from './components/company/irequest-advertisement/irequest-advertisement.component';
import { ImaterialsComponent } from './components/company/imaterials/imaterials.component';




export const routes: Routes = [
    //all
    {path: "", component: LandingPageComponent, pathMatch: "full"},
    {path: "login", component: IloginComponent, pathMatch: "full"}, //concluida, all users
    {path: 'chose', component: IchoseRolComponent, pathMatch:"full"  }, // all users
    {path: "registercompany", component: IregisterCompanyComponent, pathMatch:"full"}, //everyone
    {path: "registerrecycler", component: IregisterRecyclerComponent, pathMatch:"full"  }, //everyone
    
    
    //company and recycler
    //{path: "community", component: IcommunityComponent, pathMatch:"full"  }, //company and recycler
    //{path: "publications", component: IpublicationsComponent, pathMatch:"full"  }, //company and recycler
    //{path: "chat", component: IchatComponent, pathMatch:"full"  }, //company and recycler
    {path: "paypal", component: IpaypalComponent, pathMatch:"full"  }, //company and recycler
    {path: "donation", component: IdonationComponent, pathMatch:"full"  }, //company and recycler

    
    //admin
    //{path: "seecompany", component: IseeCompanyRequestComponent, pathMatch: "full"}, //admin
    //{path: "myteam", component: ImyteamComponent, pathMatch:"full"  }, //admin
    //{path: "business", component: IrequestBusinessComponent, pathMatch:"full"  }, //admin


    //company
    //{path: "materials", component: ImaterialsComponent, pathMatch:"full"  }, 
    //{path: "request", component: ImaterialsRequestComponent, pathMatch: "full"},
    //{path: "publicity", component: IrequestAdvertisementComponent, pathMatch:"full"  }, 
    //{path: "xs", component: IstatisticsComponent, pathMatch:"full"}, 

    //recycler

    {path: "materialsrecycler", component: ImaterialsrecyclerComponent, pathMatch:"full"  }, //recycler
    {path: "seerequest", component: IseerequestComponent, pathMatch:"full"  }, //recycler
    {path: "agreements", component: IagreementsComponent, pathMatch:"full"  },

    //{path: "materialsrecycler", component: ImaterialsrecyclerComponent, pathMatch:"full"  },
    //{path: "seerequest", component: IseerequestComponent, pathMatch:"full"  }, 


    {
        path:"recycler",
        children: [
            {path: 'community', component: IcommunityComponent},
            {path: '', redirectTo: "community", pathMatch:"full"},
            {path: 'materialsrecycler', component: ImaterialsrecyclerComponent},
            {path: '', redirectTo: "materialsrecycler", pathMatch:"full"},
            {path: 'seerequest/:id', component: IseerequestComponent},
            {path: '', redirectTo: "seerequest", pathMatch:"full"},
            {path: 'publications', component: IpublicationsComponent},
            {path: "", component: IpublicationsComponent},
            {path: "chat", component: IchatComponent },
            {path: "", component: IchatComponent,}
        ]
    },
    {
        path:"company",
        children: [
            {path: 'community', component: IcommunityComponent},
            {path: '', redirectTo: "community", pathMatch:"full"},
            {path: 'materials', component: ImaterialsComponent,},
            {path: '', redirectTo: "materials", pathMatch:"full"},
            {path: "request", component: ImaterialsRequestComponent},
            {path: "", redirectTo: "request", pathMatch: "full"},
            {path:"stadistics", component: IstatisticsComponent},
            {path: "", redirectTo:"stadistics", pathMatch: "full"},
            {path: "publicity", component: IrequestAdvertisementComponent},
            {path: "", redirectTo: "publicity", pathMatch:"full"},
            {path: 'publications', component: IpublicationsComponent},
            {path: "", component: IpublicationsComponent},
            {path: "chat", component: IchatComponent },
            {path: "", component: IchatComponent,}
        ]
    },
    {
        path:"admin",
        children: [
            {path: 'myteam', component: ImyteamComponent},
            {path: '', redirectTo: "myteam", pathMatch:"full"},
            {path: "business", component: IrequestBusinessComponent},
            {path: '', redirectTo: "business", pathMatch:"full"},
            {path: "seecompany", component: IseeCompanyRequestComponent},
            {path: "", redirectTo: "seecompany", pathMatch:"full"},

        ]
    }
];
