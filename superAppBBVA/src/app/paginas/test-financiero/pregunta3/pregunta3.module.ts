import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta3PageRoutingModule } from './pregunta3-routing.module';

import { Pregunta3Page } from './pregunta3.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta3PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Pregunta3Page]
})
export class Pregunta3PageModule {}
