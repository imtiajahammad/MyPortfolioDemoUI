import { Component, OnInit } from '@angular/core';
import { /*FormControl, FormGroup*/AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-academic-admin',
  templateUrl: './academic-admin.component.html',
  styleUrls: ['./academic-admin.component.css']
})
export class AcademicAdminComponent implements OnInit {

  get userName(){
    return this.registrationForm.get('userName');
  }

  
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

    forbiddenNameValidator(control:AbstractControl):
    {[key:string]:any} | null {  
    const forbidden=/admin/.test(control.value);
    return forbidden ? {'forbiddenName': 
    {value:control.value}}:null;
  };
    forbiddenNameValidator2(forbiddenName: RegExp):
    ValidatorFn{
    return (control:AbstractControl):
    {[key:string]:any} | null =>{  
    const forbidden=forbiddenName.test(control.value);
    return forbidden ? {'forbiddenName': 
    {value:control.value}}:null;
  };
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
  userName:['', [Validators.required,Validators.minLength(3),this.forbiddenNameValidator,this.forbiddenNameValidator2(/password/) ]],
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
