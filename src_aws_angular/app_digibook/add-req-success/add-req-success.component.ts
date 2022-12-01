import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-req-success',
  templateUrl: './add-req-success.component.html',
  styleUrls: ['./add-req-success.component.scss']
})
export class AddReqSuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getAddRequest(){
    this.router.navigate(['/dashboard']);
  }


}
