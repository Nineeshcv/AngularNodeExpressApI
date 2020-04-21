import { Component, OnInit } from '@angular/core';
import { NpmrcConfig } from '../entity/NpmrcConfig';
import { NpmrcproviderService } from '../npmrc_Service/npmrcprovider.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-npmrc-list',
  templateUrl: './npmrc-list.component.html',
  styleUrls: ['./npmrc-list.component.css']
})
export class NpmrcListComponent implements OnInit {

  public  npmrcConfigs=[];

  constructor(private _npmrcService: NpmrcproviderService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._npmrcService.listNpmrcConfigurations()
    .subscribe(data=>this.npmrcConfigs=data);
  }

  ConfirmationMessage(value){
    if(confirm("Do you want to Delete this Entry?")){
      // Delte the item
      console.log(value);
      // Navigate to Delete page

      this._npmrcService.delteConfigurations(value).subscribe(data=>this.npmrcConfigs=data);
      console.log("The code exec");
    }else{
      // Not Delete the item
    }
  }

  editConfig(key:string, value:string){
    //this.router.navigate(["editConfigurations",{key:key,value:value}]);
    console.log("Inside the log method:");
    this.router.navigate(["/editConfigurations",key,value]);
  }

}
