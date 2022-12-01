import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-info-success',
  templateUrl: './update-info-success.component.html',
  styleUrls: ['./update-info-success.component.scss']
})
export class UpdateInfoSuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getAddRequest(){
    this.router.navigate(['/dashboard']);
  }

}
