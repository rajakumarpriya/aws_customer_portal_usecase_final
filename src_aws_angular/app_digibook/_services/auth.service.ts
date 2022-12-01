import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserUpdateInfo } from '../buybook';
export class Expertise {
  role="";
}
const AUTH_API = 'http://localhost:9028/api/auth/';
const str='admin';
//string[] vowels = {"a","e","i","o","u"};
//book: string = {};/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  strIntoObj: Expertise[]=[];
  constructor(private http: HttpClient) {
   
   }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(firstName: string, lastName: string, address: string, state: string, country: string,password: string ,
    emailAddress: string, contactPreference: string , pan: string,contactNo: string,role:string,rolesval1:string): Observable<any> {
      let str: string = '[{"role":"admin"}]';
     // let rolesval: string ="test";
      this.strIntoObj = JSON.parse(str);
      console.log(this.strIntoObj);
    return this.http.post('http://localhost:9028/api/auth/signup ', {
      firstName, lastName, address, state, country,password ,
      emailAddress, contactPreference , pan,contactNo,str
    }, httpOptions);
  }
  getUpdateData(id:number)
  {
    return this.http.get("http://localhost:9028/api/auth/searchtitle/"+id);
  }

  // updateInfoRequest(id:number)
  // {
  //   return this.http.get("http://localhost:9028/api/auth/searchtitle/"+id);
  // }
   updateInfoRequest(id:any, book:UserUpdateInfo) {
    return this.http.put(AUTH_API+"update/"+id, book,{responseType: 'text'});
  }
}
