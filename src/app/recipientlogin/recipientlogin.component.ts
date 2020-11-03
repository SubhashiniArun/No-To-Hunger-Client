import { Component, OnInit } from '@angular/core';
import { RecipientAuthenticationService } from '../service/recipient-authentication.service';
import {HttpClientService} from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Recipient} from '../model/Recipient';
import {Credentials} from '../model/Credentials';

@Component({
  selector: 'app-recipientlogin',
  templateUrl: './recipientlogin.component.html',
  styleUrls: ['./recipientlogin.component.css']
})
export class RecipientloginComponent implements OnInit {

   
  /*username='Recipient'
  password='password'
  invalidLogin=false*/
  username;
  password;

  credentials: Credentials=new Credentials();
  submitted=false;

  recipients:Array<Recipient>;
  selectedRecipient: Recipient;
  action:string;

  constructor(public rloginService: RecipientAuthenticationService, private httpClientService:HttpClientService, private router: Router, private activatedRoute: ActivatedRoute) { }

   ngOnInit() {  
  this.activatedRoute.queryParams.subscribe(
    (params)=>{
      this.action=params['action']
    }
  );
  }

  checkRecipientLogin(){
    this.credentials = { username : this.username, password : this.password};
    this.rloginService.authenticate(this.credentials).subscribe(
     isValidLogin => {     
     if(isValidLogin){
      sessionStorage.setItem('username',this.username)
      sessionStorage.setItem('role',"Recipient")
      this.router.navigate(['no-hunger/recipients/donations'])

      }else{
      sessionStorage.setItem('username',null)
      console.log("Error authenticating Recipient")
  }
     });
     //error=>console.log(error));
    // this.credentials=new Credentials();
   }
   onSubmit()
   {
     this.checkRecipientLogin();
   }
  registerRecipient()
  {
  this.selectedRecipient=new Recipient();
  this.router.navigate(['no-hunger/recipients/register']);
  }
}
