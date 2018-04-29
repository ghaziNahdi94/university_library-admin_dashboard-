import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import {BookRoutingModule} from './book-routing/book-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';




@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    BookRoutingModule
  ],
  declarations: [AddBookComponent, NgbdModalContentComponent],
  entryComponents: [
    NgbdModalContentComponent
]
})
export class BookModule { }
