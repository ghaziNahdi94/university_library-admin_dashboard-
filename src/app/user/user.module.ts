import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidUserComponent } from './valid-user/valid-user.component';
import {UserRotingModule} from './user-roting/user-roting.module';
import { ValidComponent } from './valid/valid.component';

@NgModule({
  imports: [
    CommonModule,
    UserRotingModule
  ],
  declarations: [ValidUserComponent, ValidComponent]
})
export class UserModule { }