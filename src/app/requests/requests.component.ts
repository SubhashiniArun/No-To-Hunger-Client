import { Component, OnInit } from '@angular/core';
import {Request} from '../model/Request';
import {HttpClientService} from '../service/http-client.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: Array<Request>;
  displayedColumns: string[] = ['recipient_name', 'request_quantity'];
  clicked=false;
  
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  this.httpClientService.getRequests().subscribe(
    response=>this.handleSuccessfulResponse(response),
 );
 }
 handleSuccessfulResponse(response)
 {
 this.requests=response;
 }

 toggle = true;
status = 'Enable'; 
 enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    alert("Food request accepted");
}
 
}
