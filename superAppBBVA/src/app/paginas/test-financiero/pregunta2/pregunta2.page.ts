import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../servicios/http.service';
import { NavController } from '@ionic/angular';
// Servicio para pasar los datos entre páginas
import { ReceiverJsonService } from '../../../servicios/receiver-json.service';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
})

export class Pregunta2Page implements OnInit {
  nombreCuestionario;
  propiedadesPregunta = [];
  n_respuestas: any;
  respuestas = [];
  respuestasPregunta1: any[];

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
      .obtenerJSONlocal('preguntas-test/pregunta-2.json')
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

      // Se reciben los datos de la primer parte del cuestionario
    this.receiberJson.$getListSource
    .subscribe((list) => {
      this.respuestasPregunta1 = list;
      console.log('respuestas Pregunta 1', this.respuestasPregunta1);
    })
    .unsubscribe();
  }
  

  recibeRespuesta(evento, indice) {
    this.n_respuestas = evento;
  }
  
  evaluaRespuesta(){
    console.log("Holo");
  }

  enviaRespuesta() {
    console.log(this.n_respuestas);
    //pasa los datos a la siguiente página
    this.receiberJson.sendListSource(this.n_respuestas);
    this.navCtrl.navigateForward('/pregunta3');
  }
    
  
}
