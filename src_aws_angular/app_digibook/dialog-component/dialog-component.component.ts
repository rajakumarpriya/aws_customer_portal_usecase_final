import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  template: `
 <h1 mat-dialog-title>Hello There</h1>
 <div mat-dialog-content>
 <p>This Is a Simple Dialog</p>
 </div>
 <div mat-dialog-actions>
 <button mat-button (click)="close()">Close</button>
 </div>
`
})
export class DialogComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>) { }
   
    close(): void {
    this.dialogRef.close();
    }

  ngOnInit(): void {
  }


}





