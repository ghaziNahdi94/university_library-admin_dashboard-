import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../objects/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css'],
  providers : [UserService]
})
export class ValidComponent implements OnInit {


  private user:User = null;
  private URL:string = "http://localhost:8080/card/";

  private src:string = "";
  private display:string="none";

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem("user"));

  }


  imgClick(){

this.display ="block";
this.src = this.URL+this.user.fileCard;
  }

  close(){

    this.display ="none";


  }



valider(){

this.userService.setUserValidByEmail(this.user.email).subscribe(

(rep) => 
{
this.router.navigate(['valid_user']);
},
(e) => console.log(e)

);


}



}
