import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta6PageRoutingModule } from './pregunta6-routing.module';

import { Pregunta6Page } from './pregunta6.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta6PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Pregunta6Page]
})
export class Pregunta6PageModule {}
