import { Component, OnInit } from '@angular/core';
import {Request} from '../model/Request';
import {HttpClientService} from '../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-foodrequest',
  templateUrl: './foodrequest.component.html',
  styleUrls: ['./foodrequest.component.css']
})
export class FoodrequestComponent implements OnInit {

  request: Request=new Request();
  submitted=false;

   constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit() {
  }

  createRequest(){
  this.httpClientService.createRequest(this.request).subscribe(
     data => {
     console.log(data);
     this.submitted=true;
     });
     //error=>console.log(error));
     this.request=new Request();
   }

   onSubmit()
   {
     this.createRequest();
   } 

}

