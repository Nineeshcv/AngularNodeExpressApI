import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NpmrcproviderService } from '../npmrc_Service/npmrcprovider.service';

@Component({
  selector: 'app-edit-npmrc-config',
  templateUrl: './edit-npmrc-config.component.html',
  styleUrls: ['./edit-npmrc-config.component.css']
})
export class EditNpmrcConfigComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private _npmrcServie:NpmrcproviderService) { }


  public key:string;
  public value:string;
  public message:string;
  public oldKey:string;
  public oldValue:string;
  ngOnInit(): void {
    let paramKey = this.route.snapshot.paramMap.get('key');
    let paramValue = this.route.snapshot.paramMap.get('value');
    this.key = paramKey;
    this.oldKey = paramKey;
    this.oldValue = paramValue;
    this.value = paramValue;
  }

  public npmrcConfigs=[];
  updateConfiguration(){
    if(this.oldKey == this.key){
      this._npmrcServie.updateConfiguration(this.oldKey,this.value).subscribe(data=>this.npmrcConfigs=data);
    }else{
      this._npmrcServie.delteConfigurations(this.oldKey).subscribe(data=>this.npmrcConfigs=data);
      setTimeout(() => {
          this._npmrcServie.updateConfiguration(this.key,this.value).subscribe(data=>this.npmrcConfigs=data);
      }, 1000);
      
    }
    
    this.message="This Entry Successfully Saved !";
  }

}
