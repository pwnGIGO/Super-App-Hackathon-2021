import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  dataSetPrueba = [
  {"id": 1, "nombre": "Antonio", "texto": "Hola!"},
  {"id": 2, "nombre": "Felipe", "texto": "Si pudiste?"},
  {"id": 3, "nombre": "Chucho", "texto": "Ya te hice el depósito"},
  {"id": 4, "nombre": "Gabo", "texto": "Gabo se ha unido a BBVA"},
  {"id": 5, "nombre": "Rodrigo", "texto": "Rodrigo mandó una imagen"}
  ];


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  abreChat(id){
    console.log("id: "+ id)
    this.navCtrl.navigateForward('/chat');
  }
}
