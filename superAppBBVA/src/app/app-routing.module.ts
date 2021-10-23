import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'operaciones',
    loadChildren: () => import('./paginas/operaciones/operaciones.module').then( m => m.OperacionesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./paginas/mensajeria/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./paginas/mensajeria/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'personalizacion',
    loadChildren: () => import('./paginas/personalizacion/personalizacion.module').then( m => m.PersonalizacionPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./paginas/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./paginas/noticias/noticia/noticia.module').then( m => m.NoticiaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
