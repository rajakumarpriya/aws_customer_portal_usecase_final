import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/buybook';
import { BookService } from 'src/app/comp-book/book.service';

@Component({
  selector: 'app-comp-book',
  templateUrl: './comp-book.component.html',
  styleUrls: ['./comp-book.component.scss']
})
export class CompBookComponent implements OnInit {

  book: Book[] = [];

  constructor(private bookservice: BookService,
    private router: Router) { }

    ngOnInit(): void {
      console.log("before getAll")
      this.fetchAllMovies()
      console.log("after getAll")
    }
  
    fetchAllMovies(){
      this.bookservice.getBookList().subscribe({
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
      createbook(image:string, title:string, category:string,price:number,
        auhtor:string, auhtorid:number, publisher:string,published_date:string,chapter:string,
        active_status:string ){
        // this.buybook.push({title: title, director: director, rating: rating});
    
       let book:Book = {id: 0,image:image,title:title,category:category,price:price,auhtor:auhtor,
        auhtorid:auhtorid, publisher:publisher,published_date:published_date,chapter:chapter,
        active_status:active_status }
   
      //  this.bookservice.createbook(book).subscribe({
      //    next: (res)=>{
      //      this.fetchAllMovies();
      //    }
      //  })
     }
     
     deletebook(id:string|number){
       //console.log("movie id is : "+id)
       this.bookservice.deletebook(id).subscribe({
         next: (res:any)=>{
           console.log("movie id is : "+res);
           this.fetchAllMovies();
         }
       })
     }
    
     getbookById(id:number){
       //console.log("movie id is : "+id)
       this.bookservice.getbookById(id).subscribe({
         next: (res:any)=>{
           console.log("movie id is : "+res.id);
           //this.fetchAllMovies();
         }
       })
     }

     //updateData(value: any) {
      updateData(image:string, title:string, category:string,price:number,
        auhtor:string, auhtorid:number, publisher:string,published_date:string,chapter:string,
        active_status:string ){
        // this.buybook.push({title: title, director: director, rating: rating});
    
       let book: Book|any = {image:image,title:title,category:category,price:price,auhtor:auhtor,
        auhtorid:auhtorid, publisher:publisher,published_date:published_date,chapter:chapter,
        active_status:active_status }
  
      this.bookservice.updateBook(5, book)
        .subscribe(response => {
          console.log(response)
        })
    }
    updatepurchasebook(data:any){

    }
    blockbook(data:any){

    }

  }