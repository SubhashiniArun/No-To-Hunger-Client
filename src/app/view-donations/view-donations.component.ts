import { Component, OnInit } from '@angular/core';
import {Donation} from '../model/Donation';
import {HttpClientService} from '../service/http-client.service';

@Component({
  selector: 'app-view-donations',
  templateUrl: './view-donations.component.html',
  styleUrls: ['./view-donations.component.css']
})
export class ViewDonationsComponent implements OnInit {

  donations: Array<Donation>;


  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(){
  this.httpClientService.getDonations().subscribe(
    response=>this.handleSuccessfulResponse(response),
 );
 }
 handleSuccessfulResponse(response)
 {
 this.donations=response;
 }
toggle = true;
status = 'Enable'; 

enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    alert("Donation accepted");
}
}
  
