import { Injectable } from "@angular/core";
import { TokenStorageService } from "./_services/token-storage.service";
import { AuthService } from "./_services/auth.service";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestCanActivate implements CanActivate {
    //username='V222156';
    usernameval='';
    //let USER_KEY = 'auth-user';
    isLoggedIn='';
    constructor(private tokenStorage: TokenStorageService,private authService: AuthService,private router:Router) {
        this.usernameval = this.tokenStorage.getUser().username;
        console.log(this.usernameval+"rwew");
    }
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    console.log("can actviate check1");
    console.log(this.isLoggedIn);
    //*ngIf="isLoggedIn"
   
        //this.passwordval = data.email;
    return new Promise((resolve, reject) => {
        if( this.usernameval != null){
            console.log("can actviate checkif");
      setTimeout(() => resolve(true), 1000);
        }else{
         console.log("can actviate checkelse");
        // this.router.navigate()
         this.router.navigate(['/login']);
         setTimeout(() => resolve(false), 1000);
     }
    });
  }
}

// @Injectable({
//   providedIn: "root"
// })
// export class TestCanActivateChild implements CanActivateChild {
//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(true), 10);
//     });
//   }
// }

// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

// @Injectable({
//   providedIn: "root"
// })
// export class TestCanDeactivate
//   implements CanDeactivate<CanComponentDeactivate> {
//   canDeactivate(component: CanComponentDeactivate): any {
//     return component && component.canDeactivate
//       ? component.canDeactivate()
//       : true;
//   }
// }

// @Injectable({
//   providedIn: "root"
// })
// export class TestResolve implements Resolve<any> {
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<any> | Promise<any> | any {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Gopi"), 1000);
//     });
//   }
// }
