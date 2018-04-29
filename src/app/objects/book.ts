export class Book {

    titre:string;
    auteur:string;
    description:string;
    urlPhoto:string;
    disponible:boolean;
    nbr_page:number;
    langue:string;
    date_sortie:string;


    constructor(titre,auteur,description,urlPhoto,disponible,nbr_page,langue,date_sortie){
    
    this.titre = titre;
    this.auteur = auteur;
    this.description = description;
    this.urlPhoto = urlPhoto;
    this.disponible = disponible;
    this.nbr_page = nbr_page;
    this.langue = langue;
    this.date_sortie = date_sortie;
    
    
    }
    
    
    

    
    
    
    }