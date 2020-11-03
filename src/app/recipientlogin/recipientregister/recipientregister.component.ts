import { Component, OnInit } from '@angular/core';
import {Recipient} from '../../model/Recipient';
import {HttpClientService} from '../../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipientregister',
  templateUrl: './recipientregister.component.html',
  styleUrls: ['./recipientregister.component.css']
})
export class RecipientregisterComponent implements OnInit {

  recipient: Recipient=new Recipient();
  submitted=false;

  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit() {
  }

  registerRecipient(){
   this.httpClientService.registerRecipient(this.recipient).subscribe(
     data => {
     console.log(data);
     this.submitted=true;
     });
     //error=>console.log(error));
     this.recipient=new Recipient();
   }

   onSubmit()
   {
     this.registerRecipient();
   }

}
