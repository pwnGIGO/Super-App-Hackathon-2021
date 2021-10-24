import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { GaleriaComponent } from 'src/app/componentes/galeria/galeria.component';
import { HttpService } from '../../servicios/http.service';

import { Camera,CameraOptions } from "@ionic-native/camera";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.page.html',
  styleUrls: ['./personalizacion.page.scss'],
})
export class PersonalizacionPage implements OnInit {

  imagenes = [];
  categorias = [];
  imagen;
  public imgUrl: string; // Dirección de imagen
  

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private http: HttpService,
    //private camera: Camera,
    private transfer: FileTransfer,
    private modalCtrl: ModalController,
    //private file: File,
    private imagePicker: ImagePicker
    ) { }

  fileTransfer: FileTransferObject = this.transfer.create();
  


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
    console.log(categoria);
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



  // enciende la cámara
  openCamera(){
    /*
    const options: CameraOptions = {
      calidad: 90, // Calidad de foto 0 -100
      destinationType: this.camera.DestinationType.FILE_URI, // DATA_URL es base64 FILE_URI es la ruta del archivo
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true, // Si guardar en el álbum
      sourceType: this.camera.PictureSourceType.CAMERA, // Si abrir la cámara para tomar fotos o abrir el álbum para elegir PHOTOLIBRARY: selección de álbum, CÁMARA: tomar fotos,
    }

    this.camera.getPicture(options).then((imageData) => {

      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgUrl = base64Image;

      //If it's file URI
      // this.imgUrl = imageData;


      this.upload();

    }, (err) => {
      // Handle error
    });
    */
  }


  // Abre la carpeta y selecciona la imagen
  openFile(){
    console.log("abriendo...");
    var options={
      maximumImagesCount: 1, // Seleccione una imagen
      width: 200,
      height: 200,
      quality: 100
    }
    var temp = '';
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        temp=results[i];
        console.log('Image URI: ' + results[i]);
      }
      // If it's base64:
      /*let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgUrl = base64Image;

      //If it's file URI
      // this.imgUrl = imageData;

      this.upload();*/
    }, (err) => { });
    
  }

  // Carga de archivos
  upload(){
    console.log("abriendo...");
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'header-img.jpg', // Nombre del archivo
      headers: {},
      // Si la carga necesita pasar parámetros, escriba aquí
      params: {

      }
    };

    this.fileTransfer.upload('<file path>', '<api endpoint>', options)
    .then((data) => {
      // success
      console.log(data);
    }, (err) => {
      // error
      console.log("Error");
    })
    
  }


}
