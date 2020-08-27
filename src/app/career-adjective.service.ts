import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CareerAdjective } from './career-adjective';

@Injectable({
  providedIn: 'root'
})
export class CareerAdjectiveService {

  constructor(private http:HttpClient) { }

private _url:string="http://localhost:57260/api/careerAdjective/1";
getCareerAdjectiveInfo(){
  return this.http.get<CareerAdjective[]>(this._url);
}

}
