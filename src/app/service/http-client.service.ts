import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Organization} from '../model/Organization';
import {Recipient} from '../model/Recipient';
import {Donation} from '../model/Donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getRequests()
  {
    console.log('Getting All Requests');
    return this.httpClient.get<Request[]>('https://notohunger.azurewebsites.net/no-hunger/organizations/requests');
  }

  registerOrganization(newOrganization:any):Observable<any>
  {
  const httpOptions = {
              headers: new HttpHeaders(
              { 
                 'Authorization': 'Your Token',
                 'Content-Type': 'application/json'
              })
          }
    const body=JSON.stringify(newOrganization);
    return this.httpClient.post<Organization>('https://notohunger.azurewebsites.net/no-hunger/organizations/register',body,httpOptions);    
  }

  registerRecipient(newRecipient:any):Observable<any>
  {
  const httpOptions = {
              headers: new HttpHeaders(
              { 
                 'Authorization': 'Your Token',
                 'Content-Type': 'application/json'
              })
          }
    const body=JSON.stringify(newRecipient);
    return this.httpClient.post<Recipient>('https://notohunger.azurewebsites.net/no-hunger/recipients/register',body,httpOptions);    
  }

  createDonation(newDonation:any):Observable<any>
  {
      const httpOptions = {
              headers: new HttpHeaders(
              { 
                 'Authorization': 'Your Token',
                 'Content-Type': 'application/json'
              })
          }
    const body=JSON.stringify(newDonation);
    return this.httpClient.post<Organization>('https://notohunger.azurewebsites.net/no-hunger/organizations/donate',body,httpOptions);   
  }

  getDonations(){
  console.log('Getting All Donations');
    return this.httpClient.get<Request[]>('https://notohunger.azurewebsites.net/no-hunger/recipients/donations');
  }

  getRecipients(){
  console.log('Getting All Donations');
    return this.httpClient.get<Recipient[]>('https://notohunger.azurewebsites.net/no-hunger/organizations/vrecipients');
  }

  createRequest(newRequest:any):Observable<any>
  {
      const httpOptions = {
              headers: new HttpHeaders(
              { 
                 'Authorization': 'Your Token',
                 'Content-Type': 'application/json'
              })
          }
    const body=JSON.stringify(newRequest);
    return this.httpClient.post<Request>('https://notohunger.azurewebsites.net/no-hunger/recipients/request',body,httpOptions);   
  }

 
}
