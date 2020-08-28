import { Component, OnInit } from '@angular/core';
import { SelfImageService } from '../self-image.service';

@Component({
  selector: 'app-self-image',
  templateUrl: './self-image.component.html',
  styleUrls: ['./self-image.component.css']
})
export class SelfImageComponent implements OnInit {

  constructor(private selfImageService:SelfImageService) { }
  public ab=[];

  ngOnInit(): void {
    this.selfImageService.getSelfImageInfo()
    .subscribe(data=>this.ab=data);
  }

}
