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
    this.cuenta = cuenta;
  }

  pagaConPuntos(evento) {
    this.conPuntos = true;
  }

  realizaVinculacion() {
    this.navCtrl.navigateForward('/personalizacion');
  }

}
