import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.page.html',
  styleUrls: ['./personalizacion.page.scss'],
})
export class PersonalizacionPage implements OnInit {

  slides: {img:string, titulo:string, desc:string}[] =[
  {
    img:'assets/tarjetas/tarjeta1.png',
    titulo: 'slide 1',
    desc: ''
  },
  {
    img:'assets/tarjetas/tarjeta2.png',
    titulo: 'slide 2',
    desc: ''
  },
  {
    img:'assets/tarjetas/tarjeta3.png',
    titulo: 'slide 3',
    desc: ''
  },
  {
    img:'assets/tarjetas/tarjeta4.png',
    titulo: 'slide 4',
    desc: ''
  },
  {
    img:'assets/tarjetas/tarjeta5.png',
    titulo: 'slide 4',
    desc: ''
  },
  {
    img:'assets/tarjetas/tarjeta6.png',
    titulo: 'slide 4',
    desc: ''
  },
  {
    img:'assets/tarjetas/tarjeta7.png',
    titulo: 'slide 4',
    desc: ''
  },
  {
    img:'assets/tarjetas/tarjeta8.png',
    titulo: 'slide 4',
    desc: ''
  }
  ];


  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  usuario: {
    id: 1,
    //tipoCliente: "Nuevo"
    tipoCliente: "Viejo"
  }

  ngOnInit() {
  }

  enviaSolicitud(){
    this.confirmaEnvio();
    this.navCtrl.navigateForward('/operaciones');
  }

  buscar($event){
    //console.log($event.target.value);
  }

  async confirmaEnvio() {
    const alertEnvio = await this.alertCtrl.create({
      cssClass: 'alertEnvioExitoso',
      backdropDismiss: false,
      header: '¡Solicitud exitosa!',
      message: 'Revisaremos tu solicitud y te notificaremos',
      buttons: [
      {
        text: 'Cerrar',
        role: 'cancel',
      },
      ],
    });
    await alertEnvio.present();
  }

}
