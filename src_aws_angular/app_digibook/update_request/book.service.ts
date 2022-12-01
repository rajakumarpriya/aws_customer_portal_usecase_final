import { Injectable } from '@angular/core';
import { BuyBook } from '../buybook';
import { HttpClient } from '@angular/common/http';
import { CustomerRequest } from '../buybook';

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

  public save(book: CustomerRequest){
    return this._http.post(this.host+"/save", book);
  }

  public getSearchByStatus(id: String){
    return this._http.get(this.host+"/search/"+id);
  }

  // public updateBook(id: number, book: Book){
  //   return this._http.put(this.host+"/update", book);
  // }
  public updateRequest(id:any, book:CustomerRequest) {
    return this._http.put(this.host+"/update", book);
  }

  public deleteRequest(id:string|number){
    return this._http.delete(this.host+"/delete/"+id);
  }
  
}