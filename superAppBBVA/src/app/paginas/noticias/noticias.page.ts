import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias = [];/*[
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
*/
  clima = {
      "_id": "5952983359954a0adbf7ab09",
      "cityid": "MXAS0002",
      "validdateutc": "20170627T140000Z",
      "winddirectioncardinal": "SSE",
      "probabilityofprecip": "40",
      "relativehumidity": "90",
      "name": "Aguascalientes",
      "date-insert": "2017-06-27T17:36:43.084Z",
      "longitude": "-102.296",
      "state": "Aguascalientes",
      "lastreporttime": "20170627T092449Z",
      "skydescriptionlong": "Tormentas dispersas",
      "stateabbr": "AGU",
      "tempc": "17",
      "latitude": "21.87982",
      "iconcode": "96",
      "windspeedkm": "6"
    }

  gasolina =  {
      "_id": "587fbd68edfe99480a072f14",
      "calle": "Av. Adolfo López Mateos No. 1604  Col. Melchor Ocampo  Juárez",
      "rfc": "DGA930823KD3",
      "date_insert": "2017-01-18T19:09:26.784Z",
      "regular": "15.71",
      "colonia": "",
      "numeropermiso": "PL/760/EXP/ES/2015",
      "fechaaplicacion": "",
      "﻿permisoid": "2041",
      "longitude": "-106.4514",
      "latitude": "31.71947",
      "premium": "17.93",
      "razonsocial": "DÍAZ GAS  S.A. DE C.V.",
      "codigopostal": "32380",
      "dieasel": ""
    };

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
    this.http.obtenerJSONremoto('https://new-api-java.herokuapp.com/news/bbva').subscribe(
      (res) => {
        //console.log(Object.values(res));
        this.noticias = Object.values(res).slice(10, 20);
      }
      );

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
