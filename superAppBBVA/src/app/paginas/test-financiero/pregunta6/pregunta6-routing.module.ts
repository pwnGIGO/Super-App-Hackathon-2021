import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregunta6Page } from './pregunta6.page';

const routes: Routes = [
  {
    path: '',
    component: Pregunta6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregunta6PageRoutingModule {}
