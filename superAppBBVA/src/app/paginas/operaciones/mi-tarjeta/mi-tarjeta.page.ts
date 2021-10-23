import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-tarjeta',
  templateUrl: './mi-tarjeta.page.html',
  styleUrls: ['./mi-tarjeta.page.scss'],
})
export class MiTarjetaPage implements OnInit {

  constructor() { }
  valor;
  ngOnInit() {
    this.valor = Math.floor(Math.random() * 8) + 1;
    //console.log(this.valor);
  }

}
