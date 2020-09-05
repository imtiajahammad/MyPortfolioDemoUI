import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {About} from './about';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }


  private _url:string="http://localhost:57260/api/about/1";//1";
  getAboutInfo(/*id:number*/){
    return this.http.get<About[]>(this._url/*+id*/);
  }

/*
  enroll(user:User){
    return this.http.post<any>(this._url,user)
            .pipe(catchError(this.errorHandler))
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
*/
}
