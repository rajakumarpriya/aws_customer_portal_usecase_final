import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


// import {
//   AbstractControl,
//   FormBuilder,
//   FormGroup,
//   ValidatorFn,
//   Validators,
// } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // pwForm: FormGroup;

 countryList: Array<any> = [
  { name: 'India', cities: ['Tamilnadu', 'Kashmir', 'Delhi'] },
  { name: 'Spain', cities: ['Barcelona'] },
  { name: 'USA', cities: ['Downers Grove'] },
  { name: 'Mexico', cities: ['Puebla'] },
  { name: 'China', cities: ['Beijing'] },
];


 
  form: any = {
    // username: null,
    // email: null,
    // password: null
    firstName: null, lastName: null, address: null, state: null, country: null,password : null,
    emailAddress: null, contactPreference : null, pan: null,contactNo:null,role:null,rolesval:"data"
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  options = ["Select preference", "EMAIL", "PHONE"];
  listOfOptions:any ;
  selectedDocumentTypeId: any;

  // selectedCountry: any;

  // cities = {};

  // countries = [{
  //   id: 1, name: 'France', cities: ['Paris', 'Marseille', 'Nice']
  // },
  // {
  //   id: 2, name: 'Germany', cities: ['Hamburg', 'Berlin', 'Munich']
  // },
  // {
  //   id: 3, name: 'Italy', cities: ['Roma', 'Milan', 'Napoli']
  // },
  // ];
  //this.cities = this.countries.filter(x => x.id == 1)[0].cities;

  cities: Array<any>;
  changeCountry(count:any) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
  //constructor(private authService: AuthService,private fb: FormBuilder) {
    constructor(private authService: AuthService,private formBuilder: FormBuilder) {
    // this.pwForm = fb.group({
    //   pw: fb.control('', [Validators.required]),
    //   check: fb.control('', [Validators.required]),
    // });
    // this.pwForm.addValidators(
    //   matchValidator(this.pwForm.get('pw'), this.pwForm.get('check'))
    // );
    this.cities=[];
   }
   

  ngOnInit(): void {
    //this.cities = this.countries.filter(x => x.id == 1)[0].cities;
    this.setOptions();

  //   this.form = this.formBuilder.group({
    
  // }

  // this.form = this.formBuilder.group({  
  //   contactNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
  // })  
  }
  public numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }

  public alphanumbersOnlyValidator(event: any) {
    const pattern = /^[a-zA-Z0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[a-zA-Z0-9\-]/g, "");
    }
  }

  public omit_special_char(e: any) {
    console.log("dsd"+e)
    //try {
        let k;
        if (/^[a-zA-Z0-9\s]*$/.test(e.key)) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    // } catch (e) {
    // }
}

public keyPressAlphaNumeric(event:any) {

  var inp = String.fromCharCode(event.keyCode);

  if (/[a-zA-Z0-9]/.test(inp)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}
public alphaNumberOnly (e:any) {  // Accept only alpha numerics, not special characters 
  console.log('ddd'+e);
  var regex = new RegExp("^[a-zA-Z0-9 ]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (regex.test(str)) {
      return true;
  }

  e.preventDefault();
  return false;
}

onPaste(e:any) {
  e.preventDefault();
  return false;
}
  
 
setOptions(){
  this.listOfOptions = this.options;
  //this.selectedDocumentTypeId  = this.test.status; /* Hoping docTypes array exist before this statement*/

}
  // onChange(deviceValue) {
  //   this.cities = this.countries.filter(x => x.id == deviceValue)[0].cities;
  // }
  onSubmit(): void {
   // const { username, email, password } = this.form;
    const { firstName, lastName, address, state, country,password ,
      emailAddress, contactPreference , pan,contactNo,role,rolesval } = this.form;
 
   // signUpRequest.getPan(),signUpRequest.getContactNo(),signUpRequest.getContactPreference(),



    this.authService.register(firstName, lastName, address, state, country,password ,
      emailAddress, contactPreference , pan,contactNo, role,rolesval).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

 
}
// function matchValidator(
//   control: AbstractControl,
//   controlTwo: AbstractControl
// ): ValidatorFn {
//   return () => {
//     if (control.value !== controlTwo.value)
//       return { match_error: 'Value does not match' };
//     return null;
//   };
// }