import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta5PageRoutingModule } from './pregunta5-routing.module';

import { Pregunta5Page } from './pregunta5.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta5PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Pregunta5Page]
})
export class Pregunta5PageModule {}
