import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"]
})
export class AppComponent{
    age:number = 25;

    update(num:number=0){
        console.log("update");
        this.age = num;
    }
}