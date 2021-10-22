import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.page.html',
  styleUrls: ['./personalizacion.page.scss'],
})
export class PersonalizacionPage implements OnInit {

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
