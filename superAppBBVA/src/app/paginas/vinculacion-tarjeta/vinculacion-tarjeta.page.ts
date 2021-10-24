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
  json= {"activa" : "true", "puntos": "false"};

  constructor(
    private http: HttpService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.http.obtenerJSONlocal('usuarios.json').subscribe(
      (res) => {
        console.log(res[1].tarjetas)
        this.datosUsuario = res[1];
        this.datosTarjetas = res[1].tarjetas;
      }
      );
  }

  guardaCuenta(cuenta, noTarjeta) {
    this.cuenta = cuenta;
    this.json["user"] = this.datosUsuario.usuario
    this.json["numeroTarjeta"] = noTarjeta

    console.log(this.json);
    localStorage.setItem("vincula", JSON.stringify(this.json));
  }

  toogleValue(){
    this.conPuntos = !this.conPuntos;
    //console.log(this.conPuntos)
    this.json["puntos"] = this.conPuntos.toString();
  }

  pagaConPuntos(evento) {
    this.conPuntos = true;
  }

  realizaVinculacion() {
    this.navCtrl.navigateForward('/personalizacion');
  }

}
