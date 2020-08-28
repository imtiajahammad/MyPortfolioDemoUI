import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient) { }


  private _url:string="http://localhost:57260/api/experience/1";
  getExperienceInfo(){
    return this.http.get<Experience[]>(this._url);
  }
}
