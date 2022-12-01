import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CompBookComponent} from './comp-book/comp-book.component';

const routes: Routes = [

  { path: 'comp-book', component: CompBookComponent },

  // { path: ' comp-book-update', component: CompBookUpdateComponent },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
