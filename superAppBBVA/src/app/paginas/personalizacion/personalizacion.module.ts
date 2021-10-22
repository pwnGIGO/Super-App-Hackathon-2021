import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizacionPageRoutingModule } from './personalizacion-routing.module';

import { PersonalizacionPage } from './personalizacion.page';
import { ComponentesModule } from '../../componentes/componentes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizacionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PersonalizacionPage]
})
export class PersonalizacionPageModule {}
