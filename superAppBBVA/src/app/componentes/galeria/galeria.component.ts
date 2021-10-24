import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  @Input() imagenes;
  @Input() grupo;

  listaImagenes = [];
  listaNombres = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    const tam1 = Object.keys(this.imagenes).length;
    for (let i = 0; i < tam1; i++) {
      
      if (this.grupo === this.imagenes[i].grupo) {
        this.listaImagenes.push(
          this.imagenes[i].url
        );

        this.listaNombres.push(
          this.imagenes[i].nombre
        );
      }
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
