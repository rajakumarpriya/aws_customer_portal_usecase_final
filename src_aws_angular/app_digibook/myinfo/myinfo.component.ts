import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from '../buybook';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {
  currentUser: any;
 // book: CustomerRequest[] = [];
  form: any = {
    // username: null,
    // email: null,
    // password: null
    firstName: null, lastName: null, address: null, state: null, country: null,password : null,
    emailAddress: null, contactPreference : null, pan: null,contactNo:null,role:null,rolesval:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private token: TokenStorageService
    ,private _http:HttpClient) { }
   // postsObservable: Observable<User[]>;
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getData(this.currentUser.id);
    //this.postsObservable = this.authService.getUpdateData(this.currentUser.id);
  }

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
    // this.authService.getUpdateData(this.currentUser.id).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  //   getData(id:any){
  //     console.log(id+"id");
  //     this.authService.getUpdateData(id).subscribe({
  //       next: (res:any)=>{
  //         console.log("movie id is : "+res);
  //         //this.fetchAllMovies();
  //        // this.book = res;
  //       }
  //     })
  // }
 // this.fetchAllMovies(this.currentUser.id);
const test= this.getUpdateData(this.currentUser.id);
console.log(test.toString+"1233");
  }
  public getUpdateData(id:any){
    return this._http.get("http://localhost:9028/api/v1/requests/searchtitle/"+id);
  }
  // public fetchAllMovies(id:any){

  //   this.authService.getUpdateData(id).pipe(map(((res: any[]): void=> { 

  //     this.toastr.success('Inserted successfully', 'Employee Details'); 
      
  //     this.resetForm(form); this.service.refreshList();
    
  //   }
  // }

 
 public getData(id:any){
         console.log(id+"id");
         //this.authService.getUpdateData
        return this._http.get("http://localhost:9028/api/v1/requests/searchtitle/"+id);
    
     }
 
}
