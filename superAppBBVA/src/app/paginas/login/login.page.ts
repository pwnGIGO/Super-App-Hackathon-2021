import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pass = "";
  usuario = "Rodrigo";
  
  constructor(
    private peticion: HttpService
    ) {
  }

  ngOnInit() {
  }

  guardaValores(valor) {
    this.pass = valor.detail.value;
  }

  enviaDatos(){
    let json = {usuario: this.usuario, password: this.pass};
    this.peticion.login(json).subscribe((res: any) => {
      console.log(res);
    }, (error) => {
      console.log("Catch error ");
    })
  }
}
