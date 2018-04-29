import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';



const routes : Routes = [

{path : 'add_book', component : AddBookComponent}


];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
