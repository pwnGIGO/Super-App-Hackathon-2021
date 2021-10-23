import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiTarjetaPageRoutingModule } from './mi-tarjeta-routing.module';

import { MiTarjetaPage } from './mi-tarjeta.page';
import { ComponentesModule } from '../../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiTarjetaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MiTarjetaPage]
})
export class MiTarjetaPageModule {}
