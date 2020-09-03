import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  topics=['Angular','React','Vue'];
  topic2HasError=true;
  submitted=false;
  errorMsg='';

  constructor(private _aboutService:AboutService) { }

  ngOnInit(): void {
  }


  userModel=new User('Rob','rob@test.com',11111111111,'React','default','morning',true);

  validateTopic(value){
    if(value=== 'default'){
      this.topic2HasError=true;
    }
    else{
      this.topic2HasError=false;
    }
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.userModel);
    this._aboutService.enroll(this.userModel)
    .subscribe(
      data=> console.log('Success!',data),
      error=>this.errorMsg=error.statusText
    )
  }
}


export class User{
  constructor(
    public name:string,
    public email:string,
    public phone:number,
    public topic:string,
    public topic2:string,
    public timePreference:string,
    public subscribe:boolean
  ){}
}
