import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BookModule} from './book/book.module';
import {UserModule} from './user/user.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
    ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,  
    HttpClientModule,
    BookModule,
    UserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
