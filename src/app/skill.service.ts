import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }
  private _url:string="http://localhost:57260/api/skill/1";
  getSkillInfo(){
    return this.http.get<Skill[]>(this._url);
  }
}
