import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatereader',
  templateUrl: './updatereader.component.html',
  styleUrls: ['./updatereader.component.scss']
})
export class UpdatereaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoList() {
    this.router.navigate(['/comp-reader']);
  }
  //()
  getUpdateData(): void {
    const url = 'http://localhost:9052/api/v1/send_text_email';
    console.log(url+"url")
    //this.http.post(url, this.model).subscribe(
     // this.router.navigate['/home'];
     this.gotoList();
}
}
