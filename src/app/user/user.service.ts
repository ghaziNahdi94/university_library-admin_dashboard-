import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { User } from '../objects/user';
import { forEach } from '@angular/router/src/utils/collection';
import {RequestOptions} from '@angular/http';


@Injectable()
export class UserService {

  URL = "http://localhost:8080/user/no_valid";
  URL_VALID = "http://localhost:8080/validation";



  constructor(private http : HttpClient) { }


getAllUserNoValid(){

  return this.http.get<Array<User>>(this.URL);

}



setUserValidByEmail(email:string){


let data = {"email":email};
  

let headers:HttpHeaders = new HttpHeaders();
headers.set('Content-Type', 'application/json; charset=utf-8');

 return this.http.post(this.URL_VALID,data,{headers : headers,responseType : 'text'});


}

}
