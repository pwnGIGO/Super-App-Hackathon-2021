import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transporte-bbva',
  templateUrl: './transporte-bbva.page.html',
  styleUrls: ['./transporte-bbva.page.scss'],
})
export class TransporteBBVAPage implements OnInit {
  imagenes;

  constructor(
    private http: HttpService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.http.obtenerJSONlocal('imagenes-info.json').subscribe(
      (res) => {
        this.imagenes = res;
      }
    );
  }

  navegacion() {
    this.navCtrl.navigateForward('/vinculacion-tarjeta');
  }

}
