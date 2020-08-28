import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelfImage } from './self-image';

@Injectable({
  providedIn: 'root'
})
export class SelfImageService {

  constructor(private http:HttpClient) { }
  
private _url:string="http://localhost:57260/api/selfImage/1";
  getSelfImageInfo(){
    return this.http.get<SelfImage[]>(this._url);
  }

}
