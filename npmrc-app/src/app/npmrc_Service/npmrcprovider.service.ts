import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { NpmrcConfig } from '../entity/NpmrcConfig';

@Injectable({
  providedIn: 'root'
})
export class NpmrcproviderService {

  constructor(private http: HttpClient) { }

  public key;
  public value;

  public npmrcConfigAPI ="http://localhost:3001/npmrc/config";

  

  listNpmrcConfigurations() : Observable<NpmrcConfig[]>{
    return this.http.get<NpmrcConfig[]>(this.npmrcConfigAPI);
  }

  delteConfigurations( key):Observable<NpmrcConfig[]>{
    this.key= key;
    return this.http.delete<NpmrcConfig[]>(this.npmrcConfigAPI+"/?key="+key);
    //this.http.delete()
  }

  createNewConfiguration(k:string,v:string):Observable<NpmrcConfig[]>{
    this.key=k;
    this.value=v;
   // return this.http.put<NpmrcConfig[]>(this._createUrl+"/"+this.key+"/"+this.value,{},{});
   return this.http.put<NpmrcConfig[]>(this.npmrcConfigAPI,{key:k,value:v},{});
  }

  updateConfiguration(k:string,v:string):Observable<NpmrcConfig[]>{
    this.key=k;
    this.value=v;
   // return this.http.put<NpmrcConfig[]>(this._createUrl+"/"+this.key+"/"+this.value,{},{});
   return this.http.put<NpmrcConfig[]>(this.npmrcConfigAPI,{key:k,value:v},{});
  }
}
