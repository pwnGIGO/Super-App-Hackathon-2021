import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pass = "";
  usuario = "Rodrigo";
  
  constructor(
    private peticion: HttpService,
    private navCtrl: NavController
    ) {
  }

  ngOnInit() {
  }

  guardaValores(valor) {
    this.pass = valor.detail.value;
  }

  enviaDatos(){
    console.log("Entre")
    let json = {usuario: this.usuario, password: this.pass};
    this.peticion.login(json).subscribe((res: any) => {
      console.log(res);
      console.log("Redireccionando al inicio");
      this.navCtrl.navigateForward('/operaciones');
    }, (error) => {
      console.log("Redireccionando al inicio pero con login incorrecto");
      this.navCtrl.navigateForward('/operaciones');
    })
  }
}
