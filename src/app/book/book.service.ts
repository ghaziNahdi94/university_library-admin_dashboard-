import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Book} from '../objects/Book';
 

@Injectable()
export class BookService {


   //URL_BOOKS:string = "https://insat-biblio.herokuapp.com/books";
   URL_BOOKS:string = "http://localhost:8080/books";




  constructor(private http : HttpClient) {}



  addBookPhoto(file : File,book : Book){

 
    let formData = new FormData();

    formData.append('key',file);
    formData.append('book',JSON.stringify(book));

    return this.http.post(this.URL_BOOKS,formData,{responseType: 'text'});



  }






}
