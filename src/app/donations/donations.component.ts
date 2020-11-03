import { Component, OnInit } from '@angular/core';
import {Donation} from '../model/Donation';
import {HttpClientService} from '../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  donation: Donation=new Donation();
  submitted=false;
  
  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit() {
  }

  createDonation(){
  this.httpClientService.createDonation(this.donation).subscribe(
     data => {
     console.log(data);
     this.submitted=true;
     });
     //error=>console.log(error));
     this.donation=new Donation();
   }

   onSubmit()
   {
     this.createDonation();
   } 

}
