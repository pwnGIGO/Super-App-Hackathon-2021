import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinculacionTarjetaPage } from './vinculacion-tarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: VinculacionTarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinculacionTarjetaPageRoutingModule {}
