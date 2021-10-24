import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta1PageRoutingModule } from './pregunta1-routing.module';

import { Pregunta1Page } from './pregunta1.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta1PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Pregunta1Page]
})
export class Pregunta1PageModule {}
