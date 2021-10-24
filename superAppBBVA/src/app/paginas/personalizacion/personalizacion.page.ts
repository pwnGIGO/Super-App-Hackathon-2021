import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.page.html',
  styleUrls: ['./personalizacion.page.scss'],
})
export class PersonalizacionPage implements OnInit {
  imagenes = [];
  categorias = [];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.obtenerJSONlocal('/galeria.json').subscribe(
      (res) => {
        const tam1 = Object.keys(res).length;
        const tam2 = Object.keys(res[0].galeria).length;
        
        for (let i = 0; i < tam1; i++) {
          this.categorias.push(
            res[i].galeria[0]
          );

          for (let j = 1; j < tam2; j++) {
            this.imagenes.push(
              res[i].galeria[j]
            );
          }
        }

        console.log(this.categorias);
        console.log(this.imagenes);

      }
    );
  }

  enviaSolicitud() {
    this.confirmaEnvio();
    this.navCtrl.navigateForward('/operaciones');
  }

  buscar($event) {
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
