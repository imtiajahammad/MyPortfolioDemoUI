import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Academic } from './academic';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  constructor(private http:HttpClient) { }


  private _url:string="http://localhost:57260/api/academic/1";
  getAcademicInfo(){
    return this.http.get<Academic[]>(this._url);
  }
  
}
