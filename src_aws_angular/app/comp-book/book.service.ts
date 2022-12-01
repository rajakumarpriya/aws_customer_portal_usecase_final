import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './../buybook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 // constructor() { }

  // p04-springboot-h2-exception
  private host:string = "http://localhost:9022/api/v2/requests";

  ngOnInit(): void {
    this.getBookList();
  }

  // FeignClient, RestTemplate, WebClient ====> HttpClient

  // @Autorwired ==> inject in consutructor

  constructor(private _http:HttpClient) { }

  public getBookList(){
    return this._http.get(this.host);
   // ${baseUrl}?title=${title}
  }

  public save(book: Book){
    return this._http.post(this.host+"/addBook", book);
  }

  public getbookById(id: number){
    return this._http.get(this.host+"/bookById/"+id);
  }

  // public updateBook(id: number, book: Book){
  //   return this._http.put(this.host+"/update", book);
  // }
  public updateBook(id:any, book:Book) {
    return this._http.put(this.host+"/update", book);
  }

  public deletebook(id:string|number){
    return this._http.delete(this.host+"/delete/"+id);
  }
  
}