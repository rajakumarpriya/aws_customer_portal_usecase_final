import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-req-success',
  templateUrl: './update-req-success.component.html',
  styleUrls: ['./update-req-success.component.scss']
})
export class UpdateReqSuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getAddRequest(){
    this.router.navigate(['/dashboard']);
  }


}
