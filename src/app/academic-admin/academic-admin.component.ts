import { Component, OnInit } from '@angular/core';
import { /*FormControl, FormGroup*/AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-academic-admin',
  templateUrl: './academic-admin.component.html',
  styleUrls: ['./academic-admin.component.css']
})
export class AcademicAdminComponent implements OnInit {

  get userName(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray ;
  }

  addAlternateEmails(){
    this.alternateEmails.push(this.formBuilder.control(''));
  }
  
  constructor( private formBuilder: FormBuilder) { }

  registrationForm: FormGroup;
  ngOnInit(): void {




    this.registrationForm=this.formBuilder.group({
      userName:['', [Validators.required,Validators.minLength(3),this.forbiddenNameValidator,this.forbiddenNameValidator2(/password/) ]],
      password:[''],
      email:[''],
      subscribe:[false],
      confirmPassword:[''],
      address: this.formBuilder.group({
        city:[''],
        state:[''],
        postalCode:['']
      }),
      alternateEmails:this.formBuilder.array([])
    },{validator:this.PasswordValidator});


    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue=>{
        const email=this.registrationForm.get('email');
        if(checkedValue){
            email.setValidators(Validators.required);
        }
        else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });



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
  }};
  PasswordValidator(control:AbstractControl):
  {[key:string]:any} | null {  
  const password=control.get('password');
  const confirmPassword=control.get('confirmPassword');
  if(password.pristine || confirmPassword.pristine){
    return null;
  }
  return password && confirmPassword && password.value != confirmPassword.value ? {'misMatch':  true}:null;
};


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
  onSubmit(){
    console.log(this.registrationForm.value);
  }

}
