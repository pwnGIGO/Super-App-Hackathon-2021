import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MapaComponent } from './mapa/mapa.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  declarations: [
    CabeceraComponent,
    MenuPrincipalComponent,
    MapaComponent,
    RadioGroupComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CabeceraComponent,
    MenuPrincipalComponent,
    MapaComponent,
    RadioGroupComponent
  ]
})
export class ComponentesModule { }
