import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnChanges {
  // Variables que recibe el componente del elemento que lo invoca
  @Input() valorPregunta;
  @Input() listaRespuestas;
  @Input() valorInicial;

  //Variables que envía el componente al elemento que lo invoca
  @Output() datos = new EventEmitter();

  respuestasFinales = {};

  constructor() {}

  ngOnChanges() {
    this.respuestasFinales = {
      [this.valorPregunta]: this.valorInicial,
    };
    this.enviaRespuesta();
  }

  guardaValores(valor) {
    this.respuestasFinales = {
      [this.valorPregunta]: valor.detail.value,
    };
    this.enviaRespuesta();
  }

  enviaRespuesta() {
    this.datos.emit(this.respuestasFinales);
  }
}
