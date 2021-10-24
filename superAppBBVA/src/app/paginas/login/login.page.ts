import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('contenido', { read: ElementRef }) cont: ElementRef;

  pass = '';
  usuario = 'Rodrigo';

  esPass = 'password';
  mostrar = false;
  expandido = true;

  constructor(
    private peticion: HttpService,
    private navCtrl: NavController,
    private renderer: Renderer2,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() { }

  expandeLogin() {
    this.renderer.setStyle(this.cont.nativeElement, 'padding', '5em 3em');
  }

  guardaUsuario(valor) {
    this.usuario = valor.detail.value;
  }

  guardaPass(valor) {
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
    let json = { usuario: this.usuario, password: this.pass };
    console.log(json)
    this.peticion.login(json).subscribe(
      (res: any) => {
        localStorage.setItem("usuario", this.usuario);
        this.navCtrl.navigateForward('/operaciones');
      },
      (error) => {
        this.alertError();
      }
    );
  }

      async alertError() {
      const alertEnvio = await this.alertCtrl.create({
        cssClass: 'alertEnvioExitoso',
        backdropDismiss: false,
        header: '¡Datos incorrectos!',
        message: 'Psst, intenta con estos datos<br>Usuario: Super<br>Pass: Super',
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
