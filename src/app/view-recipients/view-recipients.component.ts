import { Component, OnInit } from '@angular/core';
import {Recipient} from '../model/Recipient';
import {HttpClientService} from '../service/http-client.service';

@Component({
  selector: 'app-view-recipients',
  templateUrl: './view-recipients.component.html',
  styleUrls: ['./view-recipients.component.css']
})
export class ViewRecipientsComponent implements OnInit {

 recipients: Array<Recipient>;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(){
  this.httpClientService.getRecipients().subscribe(
    response=>this.handleSuccessfulResponse(response),
 );
 }
 handleSuccessfulResponse(response)
 {
 this.recipients=response;
 }
}
