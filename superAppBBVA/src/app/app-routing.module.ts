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
  },
  {
    path: 'mapa',
    loadChildren: () => import('./paginas/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'mi-tarjeta',
    loadChildren: () => import('./paginas/operaciones/mi-tarjeta/mi-tarjeta.module').then( m => m.MiTarjetaPageModule)
  },
  {
    path: 'transporte-bbva',
    loadChildren: () => import('./paginas/transporte-bbva/transporte-bbva.module').then( m => m.TransporteBBVAPageModule)
  },
  {
    path: 'vinculacion-tarjeta',
    loadChildren: () => import('./paginas/vinculacion-tarjeta/vinculacion-tarjeta.module').then( m => m.VinculacionTarjetaPageModule)
  },
  {
    path: 'test-financiero',
    loadChildren: () => import('./paginas/test-financiero/test-financiero.module').then( m => m.TestFinancieroPageModule)
  },
  {
    path: 'pregunta1',
    loadChildren: () => import('./paginas/test-financiero/pregunta1/pregunta1.module').then( m => m.Pregunta1PageModule)
  },
  {
    path: 'pregunta2',
    loadChildren: () => import('./paginas/test-financiero/pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  },
  {
    path: 'pregunta3',
    loadChildren: () => import('./paginas/test-financiero/pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
  },
  {
    path: 'pregunta4',
    loadChildren: () => import('./paginas/test-financiero/pregunta4/pregunta4.module').then( m => m.Pregunta4PageModule)
  },
  {
    path: 'pregunta5',
    loadChildren: () => import('./paginas/test-financiero/pregunta5/pregunta5.module').then( m => m.Pregunta5PageModule)
  },
  {
    path: 'pregunta6',
    loadChildren: () => import('./paginas/test-financiero/pregunta6/pregunta6.module').then( m => m.Pregunta6PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
