import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  dataSetPrueba = [
    {"nombre": "Antonio", "texto": "Hola!"},
    {"nombre": "Felipe", "texto": "Si pudiste?"},
    {"nombre": "Chucho", "texto": "Ya te hice el depósito"},
    {"nombre": "Gabo", "texto": "Gabo se ha unido a BBVA"},
    {"nombre": "Rodrigo", "texto": "Rodrigo mandó una imagen"}
  ];


  constructor() { }

  ngOnInit() {
  }

}
