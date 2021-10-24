import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  @Input() imagenes;
  @Input() grupo;

  listaImagenes = [];

  constructor() { }

  ngOnInit() {
    const tam1 = Object.keys(this.imagenes).length;
    for (let i = 0; i < tam1; i++) {
      
      if (this.grupo === this.imagenes[i].grupo) {
        this.listaImagenes.push(
          this.imagenes[i].url
        );
      }
    }
  }
}
