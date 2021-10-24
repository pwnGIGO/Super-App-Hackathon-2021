import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosTarjetaPageRoutingModule } from './datos-tarjeta-routing.module';

import { DatosTarjetaPage } from './datos-tarjeta.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosTarjetaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DatosTarjetaPage]
})
export class DatosTarjetaPageModule {}
