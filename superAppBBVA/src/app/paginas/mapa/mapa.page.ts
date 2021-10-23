import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {}

  gas: any;

  buscar($event){
    if($event.target.value == "gasolina"){
      console.log("Busca gasolina");
    }
  }
}
