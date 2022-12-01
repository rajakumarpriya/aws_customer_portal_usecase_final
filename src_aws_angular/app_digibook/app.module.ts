import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
//import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompBookComponent } from './comp-book/comp-book.component';
import { BlockbookComponent } from './blockbook/blockbook.component';
import { UpdatereaderComponent } from './updatereader/updatereader.component';
import { UpdateRequestComponent } from './update_request/update_request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopupComponent } from './popup/popup.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { AddReqSuccessComponent } from './add-req-success/add-req-success.component';
import { UpdateReqSuccessComponent } from './update-req-success/update-req-success.component';
import { UpdateInfoSuccessComponent } from './update-info-success/update-info-success.component';


// import { IgxDatePickerModule } from "igniteui-angular";
// import { DatepickerSample4Component } from "./datepicker-sample-4/datepicker-sample-4.component";


// import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,HeaderComponent,FooterComponent,CompBookComponent,BlockbookComponent, 
    UpdatereaderComponent,UpdateRequestComponent,DashboardComponent, PopupComponent,MyinfoComponent, DialogComponentComponent, AddReqSuccessComponent, UpdateReqSuccessComponent, UpdateInfoSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [authInterceptorProviders,DatePipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
