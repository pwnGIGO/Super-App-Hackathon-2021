import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiTarjetaPage } from './mi-tarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: MiTarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiTarjetaPageRoutingModule {}
