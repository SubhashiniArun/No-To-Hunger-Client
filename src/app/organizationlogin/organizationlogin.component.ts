import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClientService} from '../service/http-client.service';
import {Organization} from '../model/Organization';
import {Credentials} from '../model/Credentials';

@Component({
  selector: 'app-organizationlogin',
  templateUrl: './organizationlogin.component.html',
  styleUrls: ['./organizationlogin.component.css']
})
export class OrganizationloginComponent implements OnInit {

  username;
  password;
 // invalidLogin=false*/

  credentials: Credentials;
  submitted=false;

  constructor(public loginService:AuthenticationService, private httpClientService:HttpClientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  organizations:Array<Organization>;
  selectedOrganization: Organization;
  action:string;

   
  ngOnInit() {
  this.activatedRoute.queryParams.subscribe(
    (params)=>{
      this.action=params['action']
    }
  );
  }

  checkOrganizationLogin(){
    this.credentials = { username : this.username, password : this.password};
    this.loginService.authenticate(this.credentials).subscribe(
     isValidLogin => {     
     if(isValidLogin){
      sessionStorage.setItem('username',this.username)
      sessionStorage.setItem('role',"Donor")
      this.router.navigate(['no-hunger/organizations/requests'])

      }else{
      sessionStorage.setItem('username',null)
      console.log("Error authenticating Organization")
  }
     });
     //error=>console.log(error));
    // this.credentials=new Credentials();
   }

    onSubmit()
   {
     this.checkOrganizationLogin();
   }


   /* if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['no-hunger/organizations/requests'])
      this.invalidLogin=false
      }else
      this.invalidLogin=true
  } */

 registerOrganization()
  {
  this.selectedOrganization=new Organization();
  this.router.navigate(['no-hunger/organizations/register']);
  }
}
