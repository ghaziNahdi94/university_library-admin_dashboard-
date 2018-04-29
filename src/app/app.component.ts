import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private titre:string = "Principale";
  private sidebarDisplay:string = "none";
  private overlayDisplay:string = "none";



 


  ngOnInit(): void {

    document.title = this.titre;

  }



  openNav(){
  
    this.sidebarDisplay = "block";
    this.overlayDisplay = "block";
  }
  
  
  closeNav(){
  
    this.sidebarDisplay = "none";
    this.overlayDisplay = "none";
  
  }



addBookPage(){

this.titre = "Ajouter un livre";
document.title = this.titre;
this.closeNav();
}

validUserPage(){
  this.titre = "Valider les inscriptions";
  document.title = this.titre;
  this.closeNav();
}


  
}
