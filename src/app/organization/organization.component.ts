import { Component, OnInit } from '@angular/core';
import {Organization} from '../model/Organization';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

   organizations:Array<Organization>;
  selectedOrganization: Organization;
  action:string;

   constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {  
  this.activatedRoute.queryParams.subscribe(
    (params)=>{
      this.action=params['action']
    }
  );
  }
  registerOrganization()
  {
  this.selectedOrganization=new Organization();
  this.router.navigate(['no-hunger/organizations/register'],{queryParams:{action:'Donor Registration'}});
  }
}
