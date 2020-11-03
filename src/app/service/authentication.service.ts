import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Credentials} from '../model/Credentials';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    
  constructor(private httpClient: HttpClient) { }
  
     authenticate(newCredentials: any):Observable<any>
    {
       const httpOptions = {
              headers: new HttpHeaders(
              { 
                 'Authorization': 'Your Token',
                 'Content-Type': 'application/json'
              })
          }
        const body=JSON.stringify(newCredentials);
        return this.httpClient.post('https://notohunger.azurewebsites.net/no-hunger/organizations/login', body, httpOptions);
     }
    /* if(username==="Organization" && password==="password"){
      sessionStorage.setItem('username',username)
      sessionStorage.setItem('role',username)
           return true;
    }else{
      return false;
    }}*/
  
   
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('username')
    console.log(!(user===null))
    return !(user===null)
  }
  logOut(){
    sessionStorage.removeItem('username')
  }
  getRoleName()
  {
    if(this.isUserLoggedIn()){
      return sessionStorage.getItem('role')
    }
  }

}
