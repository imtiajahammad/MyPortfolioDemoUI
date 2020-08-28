import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private _projectService:ProjectService) { }
  public ab=[];
  ngOnInit(): void {
    this._projectService.getProjectInfo().subscribe(data=>this.ab=data);
  }

}
