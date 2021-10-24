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
  usuario: string = '';
  datosUsuario = [];
  saldo = [];
  cuenta = [];

  constructor(
    private renderer: Renderer2,
    private http: HttpService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");
    // this.http.obtenerJSONlocal('/usuario.json').subscribe(
      this.http.obtenerJSONremoto(`https://api-g1.herokuapp.com/auth/v1/usuario/${this.usuario}`).subscribe(
      (res) => {
        this.datosUsuario.push(res);
        
        for (let i = 0; i < 2; i++) {
          this.saldo[i] = this.datosUsuario[0].tarjetas[i].saldo;
          this.cuenta[i] = this.datosUsuario[0].tarjetas[i].idTarjeta;
        }
      }
    );
  }

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
      case 4: //mapa
        this.navCtrl.navigateForward('/mapa');
        break;
      case 5: // Test financiero
        this.navCtrl.navigateForward('/test-financiero');
        break;
    }
  }

  prueba(id){
    this.navCtrl.navigateForward('/mi-tarjeta');
  }
}
