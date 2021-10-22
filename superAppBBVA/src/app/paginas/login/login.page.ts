import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private peticion: HttpService
    ) { }

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

    this.peticion.login(json).subscribe((result) => {
      console.log(result);
    });
  }


}
