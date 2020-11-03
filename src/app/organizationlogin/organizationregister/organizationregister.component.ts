import { Component, OnInit,Input,Output } from '@angular/core';
import {Organization} from '../../model/Organization';
import {HttpClientService} from '../../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organizationregister',
  templateUrl: './organizationregister.component.html',
  styleUrls: ['./organizationregister.component.css']
})
export class OrganizationregisterComponent implements OnInit {

   organization: Organization=new Organization();
  submitted=false;

  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit() {
  }

  /*newOrganization: void {
    this.submitted=false;
    this.organization=new Organization();
  }*/

  registerOrganization(){
   this.httpClientService.registerOrganization(this.organization).subscribe(
     data => {
     console.log(data);
     this.submitted=true;
     });
     //error=>console.log(error));
     //this.organization=new Organization();
   }

   onSubmit()
   {
     this.registerOrganization();
   }

    }
