import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../servicios/http.service';
import { NavController } from '@ionic/angular';
// Servicio para pasar los datos entre páginas
import { ReceiverJsonService } from '../../../servicios/receiver-json.service';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.page.html',
  styleUrls: ['./pregunta3.page.scss'],
})

export class Pregunta3Page implements OnInit {
  nombreCuestionario;
  propiedadesPregunta = [];
  n_respuestas: any;
  respuestas = [];

  constructor(
    private http: HttpService,
    private navCtrl: NavController,
    private receiberJson: ReceiverJsonService
  ) {}

  ngOnInit() {
    /*
      Se obtiene el archivo JSON con las propiedades de cada pregunta, las preguntas
      y sus respuestas para crear la vista.
    */
      this.http
      .obtenerJSONlocal('/preguntas-test/pregunta-3.json')
      //.obtenerJSONremoto('http://localhost:5000/Preguntas/cuestionario-inicio')
      //.obtenerJSONremoto('Preguntas/cuestionario-inicio')
      .subscribe((res) => {
        this.nombreCuestionario = res[0].nombreCuestionario;
        const tam1 = Object.keys(res).length;
        let aux = [];
        // Se crea la lista de propiedades.
        for (let i = 1; i < tam1; i++) {
          this.propiedadesPregunta.push(res[i].pregunta[0]);

          // Se crea la lista de de preguntas con sus respuestas.
          const tam2 = Object.keys(res[i].pregunta).length;
          for (let j = 1; j < tam2; j++) {
            aux.push(res[i].pregunta[j]);
          }
          this.respuestas.push(aux);
          aux = [];
        }
      });
  }
  

  recibeRespuesta(evento, indice) {
    this.n_respuestas = evento;
  }
  
  evaluaRespuesta(){
    console.log("Holo");
  }

  enviaRespuesta() {
    //pasa los datos a la siguiente página
    this.receiberJson.sendListSource(this.n_respuestas);
    this.navCtrl.navigateForward('/pregunta4');
  }
    
  
}