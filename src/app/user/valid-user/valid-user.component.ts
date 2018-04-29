import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../objects/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-valid-user',
  templateUrl: './valid-user.component.html',
  styleUrls: ['./valid-user.component.css'],
  providers : [UserService]
})
export class ValidUserComponent implements OnInit {


  private users:Array<User> = new Array<User>();

  constructor(private userService : UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getAllUserNoValid().subscribe(

      (users : Array<User>) => this.users = users,
      (e) => console.log(e)


    );
  }





  goValid(user:User){

    localStorage.setItem("user",JSON.stringify(user));
    this.router.navigate(['validation']);

  }









}
