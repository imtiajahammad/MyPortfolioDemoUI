import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { About } from '../about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _aboutService:AboutService) { }

  public variable: string="I am imtiaj";
  public ab=[];//=new About();

  ngOnInit(): void {
    this._aboutService.getAboutInfo(/*1*/)
      .subscribe(data=>this.ab=data);
  }

}
