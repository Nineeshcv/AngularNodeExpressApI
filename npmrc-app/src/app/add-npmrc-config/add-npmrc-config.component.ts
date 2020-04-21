import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormsModule } from "@angular/forms"

import { NpmrcproviderService } from '../npmrc_Service/npmrcprovider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-npmrc-config',
  templateUrl: './add-npmrc-config.component.html',
  styleUrls: ['./add-npmrc-config.component.css']
})
export class AddNpmrcConfigComponent implements OnInit {

  public key:string="";
  public value:string="";
  public message:string="";

  constructor(private router:Router,private _npmrcService: NpmrcproviderService) { }

  ngOnInit(): void {
  }
  public npmrcConfigs=[];
  addConfiguration(){
    this._npmrcService.createNewConfiguration(this.key,this.value).subscribe(data=>this.npmrcConfigs=data);
   // this.router.navigate(["/viewConfigurations"]);
   this.message="This Entry Successfully Saved !";
   this.key="";
   this.value="";
  }


}
