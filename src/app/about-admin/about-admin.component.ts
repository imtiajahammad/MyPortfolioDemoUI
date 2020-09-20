import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-admin',
  templateUrl: './about-admin.component.html',
  styleUrls: ['./about-admin.component.css']
})
export class AboutAdminComponent implements OnInit {

  constructor(private _aboutService:AboutService) { }
  public serviceErrorMsg="";
  public aboutGetData=[];
  public newPhone="new phone";
  topics=['English','Bangla','Vue'];
  public showAddPhonePortion=false;
  public showAddEmailPortion=false;
  public showAddLanguagePortion=false;
  public showAddBriefPortion=false;
  public showAddSocialPortion=false;
  ngOnInit(): void {
    this._aboutService.getAboutInfo(/*1*/)
              .subscribe(
                data=>this.aboutGetData=data,
                error => this.serviceErrorMsg=error.statusText);
  }
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  addPhoneNumber(){
        this.showAddPhonePortion=true;
  }
  addEmailNumber(){
    this.showAddEmailPortion=true;
  }
  addLanguageNumber(){
    this.showAddLanguagePortion=true;
  }
  addBriefNumber(){
    this.showAddBriefPortion=true;
  }
  addSocialNumber(){
    this.showAddSocialPortion=true;
  }

  delete_SmallTextListDataModel(Id:number,ParentId:number){
    /*PhoneNumber emails  languages*/
    alert(Id +"   "+ParentId );
  }
  delete_LargeTextListDataModel(Id:number,ParentId:number ){
    /*  brief  */
    alert(Id +"   "+ParentId );
  }
  delete_OnlineLinkDataModel(Id:number,ParentId:number){
    /*socialLinks */
    alert(Id +"   "+ParentId );
  }
  deleteBrief(){
    
  }
  deleteSocialLink(){
    
  }
  hideAddPhonePortion(){
    this.showAddPhonePortion=false;
  }
  AddNewPhoneNumber(phonenumber:string){
    alert("new phone number to be added is- "+ phonenumber);
    this.showAddPhonePortion=false;
  }
  AddNewEmail(email:string){
    alert("new email to be added is- "+ email);
    this.showAddEmailPortion=false;
  }
  hideAddEmailPortion(){
    this.showAddEmailPortion=false;
  }
  AddNewLanguage(language:string){
    alert("new Language to be added is- "+ language);
    this.showAddLanguagePortion=false;
  }
  hideAddLanguagePortion(){
    this.showAddLanguagePortion=false;
  }
  AddNewBrief(brief:string){
    alert("new Brief to be added is- "+ brief);
    this.showAddBriefPortion=false;
  }
  hideAddBriefPortion(){
    this.showAddBriefPortion=false;
  }
  AddNewSocial(newSocialTitle:string,newSocialLink:string){
    alert("new newSocialTitle,newSocialLink to be added is- "+ newSocialTitle+" , "+newSocialLink);
    this.showAddSocialPortion=false;
  }
  hideAddSocialPortion(){
    this.showAddSocialPortion=false;
  }
}
