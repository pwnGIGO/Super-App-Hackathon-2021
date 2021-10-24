import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vinculacion-tarjeta',
  templateUrl: './vinculacion-tarjeta.page.html',
  styleUrls: ['./vinculacion-tarjeta.page.scss'],
})
export class VinculacionTarjetaPage implements OnInit {
  datosUsuario;
  datosTarjetas;
  cuenta;
  conPuntos = false;

  constructor(
    private http: HttpService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.http.obtenerJSONlocal('/usuarios.json').subscribe(
      (res) => {
        this.datosUsuario = res[0];
        this.datosTarjetas = res[1].tarjetas;
      }
    );
  }

  guardaCuenta(cuenta) {
    this.cuenta = cuenta;
  }

  pagaConPuntos(evento) {
    this.conPuntos = true;
  }

  realizaVinculacion() {
    this.navCtrl.navigateForward('/');
  }

}
