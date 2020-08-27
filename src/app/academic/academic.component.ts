import { Component, OnInit } from '@angular/core';
import { AcademicService } from '../academic.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  constructor(private _aboutService:AcademicService) { }

  public ab=[];

  ngOnInit(): void {
    this._aboutService.getAcademicInfo().subscribe(data=>this.ab=data);
  }

}
