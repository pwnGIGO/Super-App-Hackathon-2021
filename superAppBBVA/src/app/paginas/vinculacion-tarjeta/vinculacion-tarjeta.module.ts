import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinculacionTarjetaPageRoutingModule } from './vinculacion-tarjeta-routing.module';

import { VinculacionTarjetaPage } from './vinculacion-tarjeta.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinculacionTarjetaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [VinculacionTarjetaPage]
})
export class VinculacionTarjetaPageModule {}
