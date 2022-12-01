import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerRequest } from 'src/app_digibook/buybook';
import { BookService } from 'src/app_digibook/comp-book/book.service';

@Component({
  selector: 'app-comp-book',
  templateUrl: './comp-book.component.html',
  styleUrls: ['./comp-book.component.scss']
})
export class CompBookComponent implements OnInit {

  book: CustomerRequest[] = [];

  constructor(private bookservice: BookService,
    private router: Router) { }

    ngOnInit(): void {
      console.log("before getAll")
      this.fetchAllMovies()
      console.log("after getAll")
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
     
    //  deletebook(id:string|number){
    //    //console.log("movie id is : "+id)
    //    this.bookservice.deletebook(id).subscribe({
    //      next: (res:any)=>{
    //        console.log("movie id is : "+res);
    //        this.fetchAllMovies();
    //      }
    //    })
    //  }
    
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

    //  //updateData(value: any) {
    //   updateData(image:string, title:string, category:string,price:number,
    //     auhtor:string, auhtorid:number, publisher:string,published_date:string,chapter:string,
    //     active_status:string ){
    //     // this.buybook.push({title: title, director: director, rating: rating});
    
    //    let book: Book|any = {image:image,title:title,category:category,price:price,auhtor:auhtor,
    //     auhtorid:auhtorid, publisher:publisher,published_date:published_date,chapter:chapter,
    //     active_status:active_status }
  
    //   this.bookservice.updateBook(5, book)
    //     .subscribe(response => {
    //       console.log(response)
    //     })
    // }
    // updatepurchasebook(data:any){

    // }
    // blockbook(data:any){

    // }

  }