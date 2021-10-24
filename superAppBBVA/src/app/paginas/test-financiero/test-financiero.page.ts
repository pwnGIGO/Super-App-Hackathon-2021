import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-financiero',
  templateUrl: './test-financiero.page.html',
  styleUrls: ['./test-financiero.page.scss'],
})
export class TestFinancieroPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  iniciar(){
    this.navCtrl.navigateForward('/pregunta1');
  }

}
