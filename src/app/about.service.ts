import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {About} from './about';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }


  private _url:string="http://localhost:57260/api/about/1";//1";
  getAboutInfo(/*id:number*/){
    return this.http.get<About[]>(this._url/*+id*/);
  }
}
