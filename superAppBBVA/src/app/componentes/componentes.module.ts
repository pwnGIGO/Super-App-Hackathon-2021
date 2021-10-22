import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CabeceraComponent } from './cabecera/cabecera.component';



@NgModule({
  declarations: [
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CabeceraComponent
  ]
})
export class ComponentesModule { }
