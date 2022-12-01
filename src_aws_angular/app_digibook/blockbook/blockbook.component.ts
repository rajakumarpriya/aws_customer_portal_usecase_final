import { Component,OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "app-blockbook",
    templateUrl: "blockbook.component.html",
    styleUrls: ["blockbook.component.scss"]
})

export class BlockbookComponent implements OnInit {
 
  model: UserModel = {
    name: '',
    email: '',
    subject: '',
    message: ''
 
  };
  constructor(private http: HttpClient) { }
  ngOnInit() {
 
  }
    sendNotification(): void {
      const url = 'http://localhost:9052/api/v1/send_text_email';
      console.log(url+"url")
      this.http.post(url, this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('\ sending email');
      }
 
      );
}
}
export interface UserModel {
    name: string;
    email: string;
    subject: string;
    message: string;
   
  }