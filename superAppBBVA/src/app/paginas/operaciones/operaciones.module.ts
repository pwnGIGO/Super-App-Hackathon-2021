import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacionesPageRoutingModule } from './operaciones-routing.module';

import { OperacionesPage } from './operaciones.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperacionesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [OperacionesPage]
})
export class OperacionesPageModule {}
