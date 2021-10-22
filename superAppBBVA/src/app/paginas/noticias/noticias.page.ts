import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias =[
    {
      id: 1,
      imagen: "bbva.svg",
      autor: "BBVA",
      fecha: "Oct 22, 2021",
      nota: "¡El Hackathon está devuelta!",
      contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      likes: "1.5k Likes",
      comentarios: "4 Comments",
      imagen2: "card4.jpg"
    }, 
    {
      id: 2,
      imagen: "cnn.png",
      autor: "CNN",
      fecha: "Nov 02, 2020",
      nota: "Messi lo hace de nuevo",
      contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      likes: "1.5k Likes",
      comentarios: "4 Comments",
      imagen2: "card2.jpg"
    }
  ]
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  abrirNoticia(id){
    console.log("Abre la noticia " + id);
    this.navCtrl.navigateForward('/noticia');
  }

}
