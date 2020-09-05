import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-admin',
  templateUrl: './about-admin.component.html',
  styleUrls: ['./about-admin.component.css']
})
export class AboutAdminComponent implements OnInit {

  constructor(private _aboutService:AboutService) { }

  public aboutGetData=[];
  topics=['English','Bangla','Vue'];

  ngOnInit(): void {
    this._aboutService.getAboutInfo(/*1*/)
              .subscribe(data=>this.aboutGetData=data);
  }
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
