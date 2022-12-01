import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CompBookComponent} from './comp-book/comp-book.component';
import { BlockbookComponent } from './blockbook/blockbook.component';
import { UpdatereaderComponent } from './updatereader/updatereader.component';
import { UpdateRequestComponent } from './update_request/update_request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { AddReqSuccessComponent } from './add-req-success/add-req-success.component';
import { UpdateReqSuccessComponent } from './update-req-success/update-req-success.component';
import { UpdateInfoSuccessComponent } from './update-info-success/update-info-success.component';
import { TestCanActivate } from './guards';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate:[TestCanActivate]},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[TestCanActivate] },
  { path: 'user', component: BoardUserComponent },
 
  { path: 'dialog-component', component: DialogComponentComponent },

  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'comp-book', component: CompBookComponent, canActivate:[TestCanActivate] },
  { path: 'update_request', component: UpdateRequestComponent },
  { path: 'update-info-success', component: UpdateInfoSuccessComponent, canActivate:[TestCanActivate]  },

   { path: 'blockbook', component: BlockbookComponent },
  { path: 'updatereader', component: UpdatereaderComponent },
  { path: 'myinfo', component: MyinfoComponent },
  {path:'add-req-success', component:AddReqSuccessComponent, canActivate:[TestCanActivate]},
  {path:'update-req-success', component:UpdateReqSuccessComponent, canActivate:[TestCanActivate]},
 
    // { path: ' comp-book-update', component: CompBookUpdateComponent },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
