import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta2PageRoutingModule } from './pregunta2-routing.module';

import { Pregunta2Page } from './pregunta2.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta2PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Pregunta2Page]
})
export class Pregunta2PageModule {}
