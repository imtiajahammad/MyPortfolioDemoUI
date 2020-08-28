import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  private _url:string="http://localhost:57260/api/project/1";  getProjectInfo(){
    return this.http.get<Project[]>(this._url);
  }
}
