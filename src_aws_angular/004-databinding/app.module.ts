import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent], // component, directive, pipe
    imports: [BrowserModule], // other modules
    bootstrap: [AppComponent] // starting point
})
export class AppModule{}