import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    console.log(JSON.stringify(user));
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    
    if (user) {
      console.log(JSON.parse(user).id+"tesss1");
      console.log(JSON.parse(user).username+"tesss1");
      console.log(JSON.parse(user).email+"tesss1");
      console.log(JSON.parse(user).firstName+"tesss1");
      console.log(JSON.parse(user).password+"tesss1");
  //     id=0 ;
	//  ='';
	//    ='';
	//    ='';
	//    roles='';
      return JSON.parse(user);
    }

    return {};
  }
}
