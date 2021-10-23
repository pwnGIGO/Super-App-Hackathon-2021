import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasPage } from './paginas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginasPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'operaciones',
    loadChildren: () => import('./operaciones/operaciones.module').then( m => m.OperacionesPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./mensajeria/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./mensajeria/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'personalizacion',
    loadChildren: () => import('./personalizacion/personalizacion.module').then( m => m.PersonalizacionPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginasPageRoutingModule {}
