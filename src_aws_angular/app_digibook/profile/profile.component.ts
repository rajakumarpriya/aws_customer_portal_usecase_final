import { Component, OnInit } from '@angular/core';
import { User } from '../buybook';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { UserUpdateInfo } from '../buybook';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentUser1: any;
  book: User[] = [];
  test: object|any;
  test1: object|any;
  test2: object|any;
  test3: object|any;
  test4: object|any;
  test5: object|any;
  test6: object|any;
  test7: object|any;
  test8: object|any;
  test9: object|any;
  test10: object|any;
  countryList: Array<any> = [
    { name: 'India', cities: ['Tamilnadu', 'Kashmir', 'Delhi'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];

  options = ["Select preference", "EMAIL", "PHONE"];
  listOfOptions:any ;
  selectedDocumentTypeId: any;
  cities: Array<any>;
  changeCountry(count:any) {
    console.log(count+"sdfsfd")
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
  constructor(private token: TokenStorageService,private authService: AuthService,private router: Router) {
  //   const state = this.router.getCurrentNavigation()?.extras.state as {
       
  //     //  workQueue: boolean,
  //     //  services: number,
  //     //  code: string
  
  //         firstName: string,
  //           lastName:string,
  //           emailAddress: string,
  //           state:string,
  //           country: string,
  //           contactNo:string,
  //           contactPreference:string
  //    };
  //    this.test={ lastName: state.lastName,emailAddress:state.emailAddress,
  //     state:state.state
  //     ,country: state.country,contactNo:state.contactNo,contactPreference: state.contactPreference};
  //  console.log(this.test);
  this.cities=[];
   }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.fetchAllMovies( this.token.getUser().id);
    this.setOptions();
  // this.changeCountry();
    
  }
  setOptions(){
    this.listOfOptions = this.options;
    //this.selectedDocumentTypeId  = this.test.status; /* Hoping docTypes array exist before this statement*/
  
  }

 

  fetchAllMovies(id:any){
    this.authService.getUpdateData(id).subscribe({
      next: (res:any)=>{
        console.log("movie id is : "+res.id);
        //this.fetchAllMovies();

        this.test2 = res.lastName;
        this.test1 = res.firstName;
        this.test3 = res.emailAddress;
        this.test4 =res.state;
        this.test5 =res.country;
        this.test6 =res.pan;
        this.test7 =res.id;
        this.test8 =res.address;
        this.test9 =res.contactNo;
        this.test10 =res.contactPreference;
        console.log(this.test10+this.test5+this.test4)


      //   const navigationExtras: NavigationExtras = {
      //     state: {
           
       
      //       firstName: res.firstName,
      //       lastName:res.lastName,
      //       emailAddress: res.emailAddress,
      //       state:res.state,
      //       country: res.country,
      //       contactNo:res.contactNo,
      //       contactPreference:res.contactPreference
      //     }
      //   };
      //  // this.router.navigate(['/profile'], navigationExtras);
        //console.log("movie res is : "+this.book);
      }
    })
  }

  updateInfo(item:any,item1:any,item2:any,item3:any,item4:any,item5:any,item6:any,item7:any,item8:any
    ,item9:any){

     let book:UserUpdateInfo = {id:item,firstName:item1,lastName:item2,address:item3,state:item4,country:item5,
      pan:item6,	contactNo:item7,emailaddress:item8,contactPreference:item9};
      
      

    //  status:idx,
    //  completedDate:this.test.completedDate,comments:item }
     console.log(this.test6);
     console.log(book);
     console.log("movie id is : "+book.address);
     this.authService.updateInfoRequest(item,book).subscribe({
       // console.log("movie id is : "+res.id);
      next: (res:any)=>{
        console.log("movie id is : "+res.state);
        //this.fetchAllMovies();
        this.book = res;
        this.router.navigate(['/update-info-success']);
       
      }
    })
    

    //   this.bookservice.updateRequest(this.test.id,book).subscribe({
    //   next: (res:any)=>{
    //     console.log("movie id is : "+res.id);
    //     //this.fetchAllMovies();
    //     this.book = res;
    //   }
    // })
 }

 back(){
  this.router.navigate(['/dashboard']);
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

  
}
