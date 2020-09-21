import { Component, OnInit } from '@angular/core';
import { /*FormControl, FormGroup*/FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-academic-admin',
  templateUrl: './academic-admin.component.html',
  styleUrls: ['./academic-admin.component.css']
})
export class AcademicAdminComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

/*
  registrationForm=new FormGroup({
    userName: new FormControl('Vishwas'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address:new FormGroup({
      city:new FormControl(''),
      state:new FormControl(''),
      postalCode:new FormControl('')
    })
  });
*/
registrationForm=this.formBuilder.group({
  userName:['Vishwas'],
  password:[''],
  confirmPassword:[''],
  address: this.formBuilder.group({
    city:[''],
    state:[''],
    postalCode:['']
  })
})

  loadApiData(){
    this.registrationForm.patchValue/*setValue*/({
      userName:'Bruce',
      password:'test',
      confirmPassword:'test'/*,
      address:{
        city:'test',
        state:'test',
        postalCode:'test',
      }*/
    });

  }

}
