import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ValidUserComponent } from '../valid-user/valid-user.component';
import { ValidComponent } from '../valid/valid.component';



const routes:Routes = [

{path:'valid_user', component : ValidUserComponent},
{path : 'validation', component : ValidComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class UserRotingModule { }
