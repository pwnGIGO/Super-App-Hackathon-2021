import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasPage } from './paginas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginasPage
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
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
  },  {
    path: 'personalizacion',
    loadChildren: () => import('./personalizacion/personalizacion.module').then( m => m.PersonalizacionPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginasPageRoutingModule {}
