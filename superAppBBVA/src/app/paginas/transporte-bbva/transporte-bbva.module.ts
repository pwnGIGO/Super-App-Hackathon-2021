import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporteBBVAPageRoutingModule } from './transporte-bbva-routing.module';

import { TransporteBBVAPage } from './transporte-bbva.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporteBBVAPageRoutingModule,
    ComponentesModule
  ],
  declarations: [TransporteBBVAPage]
})
export class TransporteBBVAPageModule {}
