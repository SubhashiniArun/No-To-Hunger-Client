import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { OrganizationComponent } from './organization/organization.component';
import { RequestsComponent } from './requests/requests.component';
import {HttpClientModule} from '@angular/common/http';
import { DonationsComponent } from './donations/donations.component';
import { ViewDonationsComponent } from './view-donations/view-donations.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { OrganizationloginComponent } from './organizationlogin/organizationlogin.component';
import { OrganizationregisterComponent } from './organizationlogin/organizationregister/organizationregister.component';
import { RecipientloginComponent } from './recipientlogin/recipientlogin.component';
import { RecipientregisterComponent } from './recipientlogin/recipientregister/recipientregister.component';
import { FoodrequestComponent } from './foodrequest/foodrequest.component';
import { ViewRecipientsComponent } from './view-recipients/view-recipients.component';


//import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,        
    LogoutComponent,    
    OrganizationComponent, RequestsComponent,
    DonationsComponent,ViewDonationsComponent,
    AppmenuComponent, OrganizationloginComponent,
    OrganizationregisterComponent, RecipientloginComponent,
    RecipientregisterComponent, FoodrequestComponent, ViewRecipientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    ],
 
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents:[PopupComponent]

})
export class AppModule { }

