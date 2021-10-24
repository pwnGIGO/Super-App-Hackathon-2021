import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vinculacion-tarjeta',
  templateUrl: './vinculacion-tarjeta.page.html',
  styleUrls: ['./vinculacion-tarjeta.page.scss'],
})
export class VinculacionTarjetaPage implements OnInit {
  usuario: string;
  datosUsuario = [];
  saldo = [];
  idCuenta = [];
  cuenta;
  conPuntos = false;
  json = { "user": 'Rodrigo', "numeroTarjeta": '2222-2222-3333-4567', "urlImage": '', "activa": "true", "puntos": "false" };

  constructor(
    private http: HttpService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");

    // this.http.obtenerJSONlocal('usuarios.json').subscribe(
    this.http.obtenerJSONremoto(`https://api-g1.herokuapp.com/auth/v1/usuario/${this.usuario}`).subscribe(
      (res) => {
        console.log(res);

        for (let i = 0; i < 2; i++) {
          this.saldo[i] = res['tarjetas'][i].saldo;
          this.idCuenta[i] = res['tarjetas'][i].idTarjeta;
        }
      }
    );
  }

  guardaCuenta(cuenta, noTarjeta) {
    console.log('guardando cuenta');
    this.cuenta = cuenta;
    /* this.json["user"] = this.datosUsuario['usuario']
    this.json["numeroTarjeta"] = noTarjeta */

    console.log('1',this.json);
    localStorage.setItem("vincula", JSON.stringify(this.json));
    console.log('final de guardando cuenta');
  }

  toogleValue() {
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
