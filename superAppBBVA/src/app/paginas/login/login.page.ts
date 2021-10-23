import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('contenido', { read: ElementRef }) cont: ElementRef;

  pass = '';
  esPass = 'password';
  usuario = 'Rodrigo';
  mostrar = false;
  expandido = true;

  constructor(
    private peticion: HttpService,
    private navCtrl: NavController,
    private renderer: Renderer2
  ) { }

  ngOnInit() { }

  expandeLogin() {
    this.renderer.setStyle(this.cont.nativeElement, 'padding', '5em 3em');
  }

  guardaValores(valor) {
    this.pass = valor.detail.value;
  }

  /*
    Esta función muestra y oculta la contraseña que ingresa el usuario en el input.
  */
  muestraPass() {
    if (this.esPass === 'password') {
      this.esPass = 'text';
    } else {
      this.esPass = 'password';
    }
    this.mostrar = !this.mostrar;
  }

  enviaDatos() {
    console.log('Entre');
    let json = { usuario: this.usuario, password: this.pass };
    this.peticion.login(json).subscribe(
      (res: any) => {
        console.log(res);
        console.log('Redireccionando al inicio');
        this.navCtrl.navigateForward('/operaciones');
      },
      (error) => {
        console.log('Redireccionando al inicio pero con login incorrecto');
        this.navCtrl.navigateForward('/operaciones');
      }
    );
  }
}
