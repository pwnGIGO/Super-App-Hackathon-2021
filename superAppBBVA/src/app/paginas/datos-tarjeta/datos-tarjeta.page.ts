import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos-tarjeta',
  templateUrl: './datos-tarjeta.page.html',
  styleUrls: ['./datos-tarjeta.page.scss'],
})
export class DatosTarjetaPage implements OnInit {
  datosUsuario = [];
  datosTarjetas = [];
  usuario;

  constructor(
    private http: HttpService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");

    // this.http.obtenerJSONlocal('usuario.json').subscribe(
      this.http.obtenerJSONremoto(`https://api-g1.herokuapp.com/auth/v1/usuario/${this.usuario}`).subscribe(
      (res) => {
        this.datosTarjetas = res['tarjetas'][0]['tarjetasMetro'];
      }
    );
  }

  solicitaNueva() {
    this.navCtrl.navigateForward('/vinculacion-tarjeta');
  }

}
