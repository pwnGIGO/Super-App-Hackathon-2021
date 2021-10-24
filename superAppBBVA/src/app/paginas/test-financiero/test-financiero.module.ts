import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFinancieroPageRoutingModule } from './test-financiero-routing.module';

import { TestFinancieroPage } from './test-financiero.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFinancieroPageRoutingModule,
    ComponentesModule
  ],
  declarations: [TestFinancieroPage]
})
export class TestFinancieroPageModule {}
