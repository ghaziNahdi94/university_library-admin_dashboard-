import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

import {Book} from '../../objects/Book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from '../ngbd-modal-content/ngbd-modal-content.component';





@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers : [BookService]
})
export class AddBookComponent implements OnInit {

  constructor(private bookService : BookService,private modalService : NgbModal) { }

  ngOnInit() {
    document.title = "Ajouter un livre";
  }




reset(title,auteur,nbrPages,langue,date,description,photo) : void{


  title.value = "";
  auteur.value = "";
  nbrPages.value = "";
  langue.value = "";
  date.value = "";
  description.value = "";
  photo.value = "";  

}









send(title,auteur,nbrPages,langue,date,description,photo):void{

  let book = {

    titre: title.value,
    auteur:auteur.value,
    description:description.value,
    urlPhoto:"",
    disponible:true,
    nbr_page:nbrPages.value,
    langue:langue.value,
    date_sortie:date.value

  };

  this.bookService.addBookPhoto(photo.files[0],book).subscribe(

    (res : any) => {
    this.reset(title,auteur,nbrPages,langue,date,description,photo);
    this.modalService.open(NgbdModalContentComponent);
    },

    (err) => {console.log(err);
    },



  );



}










}
