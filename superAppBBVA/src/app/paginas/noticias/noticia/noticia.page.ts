import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
  noticia = {
    id: 1,
    imagen: "bbva.svg",
    autor: "BBVA",
    fecha: "Oct 22, 2021",
    nota: "¡El Hackathon está devuelta!",
    contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
    likes: "1.5k Likes",
    comentarios: "4 Comments",
    imagen2: "card4.jpg"
  }
  constructor() { }

  ngOnInit() {
  }

}
