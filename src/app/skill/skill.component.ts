import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private skillService:SkillService) { }
  public ab=[];

  ngOnInit(): void {
    this.skillService.getSkillInfo().subscribe(data=>this.ab=data);
  }

}
