import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OrganizationComponent } from './organization/organization.component';
import { LogoutComponent } from './logout/logout.component';
import {RequestsComponent} from './requests/requests.component';
import {DonationsComponent} from './donations/donations.component';
import { FoodrequestComponent } from './foodrequest/foodrequest.component'
import {ViewDonationsComponent} from './view-donations/view-donations.component';
import { OrganizationloginComponent } from './organizationlogin/organizationlogin.component';
import { OrganizationregisterComponent } from './organizationlogin/organizationregister/organizationregister.component';
import { RecipientloginComponent } from './recipientlogin/recipientlogin.component';
import { RecipientregisterComponent } from './recipientlogin/recipientregister/recipientregister.component';
import { ViewRecipientsComponent } from './view-recipients/view-recipients.component';


const routes: Routes = [
 {path:'', component: OrganizationComponent},
 {path:'no-hunger/organizations/login',component: OrganizationloginComponent},
 {path:'no-hunger/organizations/register',component:OrganizationregisterComponent},
 {path:'no-hunger/organizations/vrecipients',component:ViewRecipientsComponent},
 {path:'no-hunger/recipients/login',component:RecipientloginComponent},
 {path:'no-hunger/recipients/register',component:RecipientregisterComponent},
 {path:'no-hunger/recipients/requestfood',component:FoodrequestComponent},
 {path:'no-hunger/organizations/logout', component: LogoutComponent },
 {path:'organizations', component: OrganizationComponent },
 {path:'no-hunger/organizations/requests',component:RequestsComponent},
 {path:'no-hunger/organizations/donate',component:DonationsComponent}, 
 {path:'no-hunger/recipients/donations',component:ViewDonationsComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
