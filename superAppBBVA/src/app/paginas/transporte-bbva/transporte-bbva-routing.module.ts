import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporteBBVAPage } from './transporte-bbva.page';

const routes: Routes = [
  {
    path: '',
    component: TransporteBBVAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporteBBVAPageRoutingModule {}
