import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionesPage } from './operaciones.page';

const routes: Routes = [
  {
    path: '',
    component: OperacionesPage
  },  {
    path: 'mi-tarjeta',
    loadChildren: () => import('./mi-tarjeta/mi-tarjeta.module').then( m => m.MiTarjetaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionesPageRoutingModule {}
