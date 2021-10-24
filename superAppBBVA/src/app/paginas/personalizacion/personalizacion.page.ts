import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { GaleriaComponent } from 'src/app/componentes/galeria/galeria.component';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.page.html',
  styleUrls: ['./personalizacion.page.scss'],
})
export class PersonalizacionPage implements OnInit {
  imagenes = [];
  categorias = [];
  imagen;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private http: HttpService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.http.obtenerJSONlocal('galeria.json').subscribe(
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
      }
    );
  }

  async muestraGaleria(categoria) {
    const modal = await this.modalCtrl.create({
      component: GaleriaComponent,
      backdropDismiss: false,
      componentProps: {
        grupo: categoria,
        imagenes: this.imagenes
      },
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.imagen = data;
  }

  enviaSolicitud() {
    console.log(localStorage.getItem("vincula"));
    let json = JSON.parse(localStorage.getItem("vincula"));
    console.log("JSON final");
    console.log(json);
    this.http.vinculaTarjeta(json).subscribe(
      (res: any) => {
        console.log("Enviado con éxito");
      },
      (error) => { console.log("Algo salió mal"); }
    );
    this.confirmaEnvio();
    this.navCtrl.navigateForward('/personalizacion');
  }

  async confirmaEnvio() {
    const alertEnvio = await this.alertCtrl.create({
      cssClass: 'alertEnvioExitoso',
      backdropDismiss: false,
      header: '¡Solicitud exitosa!',
      message: 'Has realizado la solicitud de tu tarjeta de transpote BBVA con éxito.',
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
