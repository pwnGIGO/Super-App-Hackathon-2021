import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  @ViewChild('contenido', { read: ElementRef }) cont: ElementRef;
  @ViewChild('icono', { read: ElementRef }) flecha: ElementRef;

  expandido = false;
  usuario = 'Antonio';
  datosUsuario;
  datosTarjetas;

  constructor(
    private renderer: Renderer2,
    private http: HttpService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.http.obtenerJSONlocal('/usuarios.json').subscribe(
      (res) => {
        this.datosUsuario = res[0];
        this.datosTarjetas = res[1].tarjetas;
      }
    );
  }

  // console.log(this.datosUsuario[0].tarjetas[0].saldo);

  // Esta función muestra la lista desplegable
  despliegaLista() {
    if (this.expandido) {
      this.renderer.setStyle(
        this.flecha.nativeElement,
        'transform',
        'rotateZ(0deg)'
      );
      this.renderer.setStyle(this.cont.nativeElement, 'max-height', '0px');
    } else {
      this.renderer.setStyle(
        this.flecha.nativeElement,
        'transform',
        'rotateZ(180deg)'
      );
      this.renderer.setStyle(
        this.flecha.nativeElement,
        'transition',
        '.7s ease-in-out'
      );
      this.renderer.setStyle(this.cont.nativeElement, 'max-height', '3000px');
    }
    this.expandido = !this.expandido;
  }

  // Esta función oculta la lista desplegable
  ocultaLista() {
    this.renderer.setStyle(
      this.flecha.nativeElement,
      'transition',
      '.7s ease-in-out'
    );
    this.renderer.setStyle(
      this.flecha.nativeElement,
      'transform',
      'rotateZ(0deg)'
    );
    this.renderer.setStyle(this.cont.nativeElement, 'max-height', '0px');
    this.expandido = false;
  }


  navega(id) {
    switch (id) {
      case 1: //Contactos
        this.navCtrl.navigateForward('/contactos');
        break;
      case 2: // Tarjeta de transporte
        this.navCtrl.navigateForward('/transporte-bbva');
        break;
      case 3: //Noticias
        this.navCtrl.navigateForward('/noticias');
        break;
      case 4: //Noticias
        this.navCtrl.navigateForward('/mapa');
        break;
      case 5: // Test financiero
        this.navCtrl.navigateForward('/test-financiero');
        break;
    }
  }

  prueba(id){
    //console.log(id);
    this.navCtrl.navigateForward('/mi-tarjeta');
  }
}
