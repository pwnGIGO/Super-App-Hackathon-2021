import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  pass = "";
  usuario = "Rodrigo";

  ngOnInit() {
  }

  guardaValores(valor) {
    this.pass = valor.detail.value;
  }

  enviaDatos(){
    console.log("Enviar");
    let json = {usuario: this.usuario, password: this.pass};
    console.log(json);
  }


}
