import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerRequest } from './../buybook'
import { BookService } from 'src/app_digibook/comp-book/book.service';

@Component({
  selector: 'app-comp-book',
  templateUrl: './comp-book.component.html',
  styleUrls: ['./comp-book.component.scss']
})
export class CompBookComponent implements OnInit {

  book: CustomerRequest[] = [];
  //student:FormGroup|any;

  constructor(private bookservice: BookService,
    private router: Router) { }

    ngOnInit(): void {
      console.log("before getAll")
      this.fetchAllMovies()
      console.log("after getAll")
      // this.student = new FormGroup({
      //   name: new FormControl()
      // })
    }
  
    fetchAllMovies(){
      this.bookservice.getBookList().subscribe({
        next: (res:any)=>{
          console.log(res.completedDate+"tesrte")
          this.book = res;
        },
        error: (err:any)=>{
          console.error(err)
        }
      })
    }

 


    //create(){
      save(title:string, description:string,status:string,
        completedDate:string,comments:string ){
        // this.buybook.push({title: title, director: director, rating: rating});

    
       let book:CustomerRequest = {id: 0,title:title,description:description,status:status,
        completedDate:completedDate,comments:comments }
   
       this.bookservice.save(book).subscribe({
         next: (res:any)=>{
           this.fetchAllMovies();
         }
       })
     }
     
     deleteRequest(id:string|number){
       //console.log("movie id is : "+id)
       this.bookservice.deleteRequest(id).subscribe({
         next: (res:any)=>{
           console.log("movie id is : "+res);
           this.fetchAllMovies();
         }
       })
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
      this.router.navigate
    }
    //  updateData(student: Number|CustomerRequest): void {
    //   // this.bookservice.
    //   // this.book = student.title;
    //   // this.ngForm.controls['firstName'].setValue(this.student.firstName)
    //   // this.myForm.controls['lastName'].setValue(this.student.lastName)
    //   // this.myForm.controls['email'].setValue(this.student.email)
    //   // this.yourFormgroup.get("yourFormControl").setValue("yourValue");

    //  // this.student.controls.name.setValue('foo')
    //  // console.log(this.student)
    //  console.log(this)

    // }
     //updateData(value: any) {
    //   updateData(title:string, description:string,status:string,
    //     completedDate:string,comments:string ){
    //     // this.buybook.push({title: title, director: director, rating: rating});
    
    //    let book: CustomerRequest|any = {title:title, description:description,status:status,
    //     completedDate:completedDate,comments:comments }
  
    //   this.bookservice.updateRequest(5, book)
    //     .subscribe(response => {
    //       console.log(response)
    //     })
    // }
    // updatepurchasebook(data:any){

    // }
    // blockbook(data:any){

    // }

  }