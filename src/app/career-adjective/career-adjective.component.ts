import { Component, OnInit } from '@angular/core';
import { CareerAdjective } from '../career-adjective';
import { CareerAdjectiveService } from '../career-adjective.service';

@Component({
  selector: 'app-career-adjective',
  templateUrl: './career-adjective.component.html',
  styleUrls: ['./career-adjective.component.css']
})
export class CareerAdjectiveComponent implements OnInit {

  constructor(private _careerAdjectiveService:CareerAdjectiveService) { }
  public ab=[];

  ngOnInit(): void {
    this._careerAdjectiveService.getCareerAdjectiveInfo().subscribe(data=>this.ab=data);
  }

}
