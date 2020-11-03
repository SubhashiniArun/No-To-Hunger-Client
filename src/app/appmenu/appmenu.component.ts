import { Component, OnInit , OnChanges} from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { RecipientAuthenticationService } from '../service/recipient-authentication.service'


@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

   username:string='';
   r_username:string='';
  
  constructor(public ologinService:AuthenticationService, public rloginService: RecipientAuthenticationService) { }

  ngOnInit(){
  this.username=this.ologinService.getRoleName();
  this.r_username=this.rloginService.getRoleName();
    }

}
