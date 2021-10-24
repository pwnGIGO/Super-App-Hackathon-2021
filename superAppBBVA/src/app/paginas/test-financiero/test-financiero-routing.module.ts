import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFinancieroPage } from './test-financiero.page';

const routes: Routes = [
  {
    path: '',
    component: TestFinancieroPage
  },
  {
    path: 'pregunta2',
    loadChildren: () => import('./pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  },
  {
    path: 'pregunta2',
    loadChildren: () => import('./pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  },
  {
    path: 'pregunta4',
    loadChildren: () => import('./pregunta4/pregunta4.module').then( m => m.Pregunta4PageModule)
  },
  {
    path: 'pregunta3',
    loadChildren: () => import('./pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
  },
  {
    path: 'pregunta5',
    loadChildren: () => import('./pregunta5/pregunta5.module').then( m => m.Pregunta5PageModule)
  },
  {
    path: 'pregunta6',
    loadChildren: () => import('./pregunta6/pregunta6.module').then( m => m.Pregunta6PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFinancieroPageRoutingModule {}
