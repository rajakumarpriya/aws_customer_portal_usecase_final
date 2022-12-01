import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { CustomerRequest } from 'src/app_digibook/buybook';
import { BookService } from 'src/app_digibook/comp-book/book.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  book: CustomerRequest[] = [];
  //student:FormGroup|any;

  constructor(private bookservice: BookService,
    private router: Router,private modalService: NgbModal) { }

 








 

    ngOnInit(): void {
      console.log("before getAll")
      this.fetchAllMovies()
      console.log("after getAll")
      // this.student = new FormGroup({
      //   name: new FormControl()
      // })
    }
  
    

 
    getAddRequest(){
      this.router.navigate(['/comp-book']);
    }

    
    
    
     fetchAllMovies(){
      this.bookservice.getBookPendingList().subscribe({
        next: (res:any)=>{
          console.log(res)
          this.book = res;
        },
        error: (err:any)=>{
          console.error(err)
        }
      })
    }
    deleteRequest(id:string|number){
      //console.log("movie id is : "+id)
      if(window.confirm('Are sure you want to delete this request ?')){
        console.log("if");
      this.bookservice.deleteRequest(id).subscribe({
        next: (res:any)=>{
          console.log("movie id is : "+res);
          this.fetchAllMovies();
        }
      })
    }
    else{
      console.log("else")
    }
    }
    getSearchByStatus(id:String){
      //console.log("movie id is : "+id)
      this.bookservice.getSearchByStatus(id).subscribe({
        next: (res:any)=>{
          console.log("movie id is : "+res.id);
          //this.fetchAllMovies();
          this.book = res;
        }
      })
    }
    
    getSearchByTitle(id:String,id1:String){
     console.log("movie id is : "+id1)
     console.log("movie id is : "+id)
     this.bookservice.getSearchByTitle(id,id1).subscribe({
       next: (res:any)=>{
        // console.log("movie id is : "+res.id);
         //this.fetchAllMovies();
         this.book = res;
       }
     })
   }
   
  //  getSearchByStatus(id:String){
  //     //console.log("movie id is : "+id)
  //     this.bookservice.getSearchByStatus(id).subscribe({
  //       next: (res:any)=>{
  //         console.log("movie id is : "+res.id);
  //         //this.fetchAllMovies();
  //         this.book = res;
  //       }
  //     })
  //   }
    update(item:any,idx:any) {
     //here idx will give you the index
     // let book:CustomerRequest = {item.id, item.title,description:description,status:status,
     //   item.completedDate,item.comments }
     console.log(item.title);
     console.log(item.id);
     console.log(item.description);
     console.log(item.status);
     console.log(item.comments);
     console.log(item.completedDate);
     // const navigationExtras: NavigationExtras = {
     //   state: {
     //     title: item.title
       
     //   }
     // };
    // this.router.navigate(['/update_request'], { state: { example: item.completedDate } });

     const navigationExtras: NavigationExtras = {
       state: {
        
    
     title: item.title,
         id:item.id,
         description: item.description,
         status: item.status,
         comments:item.comments,
         completedDate:item.completedDate
       }
     };
     this.router.navigate(['/update_request'], navigationExtras);

     //console.log(this.router.getCurrentNavigation().extras.state.example);
    // this.router.navigate(['/update_request'], item.completedDate);
    // this.router.navigate(['/update_request']);
   }
     
   

  }