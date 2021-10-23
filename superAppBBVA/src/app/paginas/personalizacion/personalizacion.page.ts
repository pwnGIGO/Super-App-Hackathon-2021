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
    img:'assets/imagenes/Slides/3.svg',
    titulo: 'slide 1',
    desc: ''
  },
  {
    img:'assets/imagenes/Slides/3.svg',
    titulo: 'slide 2',
    desc: ''
  },
  {
    img:'assets/imagenes/Slides/3.svg',
    titulo: 'slide 3',
    desc: ''
  },
  {
    img:'assets/imagenes/Slides/3.svg',
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
    console.log($event.target.value);
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
