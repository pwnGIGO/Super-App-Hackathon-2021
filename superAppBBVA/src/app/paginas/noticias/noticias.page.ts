import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../servicios/http.service';

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

  clima = {}
  gasolina = {}
  aire = {
    "_id": "58c780bf281e87010078f48d",
    "stations": [
    {
      "indexes": [
      {
        "calculationTime": "1970-01-01T00:00:00.000Z",
        "responsiblePollutant": "",
        "value": "index",
        "scale": "IMECA"
      }
      ],
      "measurements": [

      ],
      "location": {
        "alt": "",
        "lon": "long",
        "lat": "lat"
      },
      "source_id": "source",
      "name": "station",
      "id": "cve"
    }
    ]
  }
  calidad = "7";
  lugar = "CDMX";

  constructor(private navCtrl: NavController, private http: HttpService) {}

  ngOnInit() {
    //https://api.datos.gob.mx/v2/condiciones-atmosfericas
    this.http.obtenerJSONremoto('https://api.datos.gob.mx/v2/condiciones-atmosfericas').subscribe(
      (res) => {
        let aleatorio = Math.floor(Math.random()*99);
        this.clima = res["results"][aleatorio];
      }
      );

    this.http.obtenerJSONremoto('https://api.datos.gob.mx/v1/precio.gasolina.publico/').subscribe(
      (res) => {
        let aleatorio = Math.floor(Math.random()*99);
        this.gasolina = res["results"][aleatorio];
      }
      );

    this.http.obtenerJSONremoto('https://api.datos.gob.mx/v1/calidadAire').subscribe(
      (res) => {
        let aleatorio = Math.floor(Math.random()*99);
        this.aire = res["results"][aleatorio];
        try{
          this.calidad = this.aire.stations[0].indexes[0].value;
          this.lugar = this.aire.stations[0].source_id
        }catch(e){}
      }
      ); 
  }

  abrirNoticia(id){
    console.log("Abre la noticia " + id);
    this.navCtrl.navigateForward('/noticia');
  }

}
