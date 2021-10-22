import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
<<<<<<< Updated upstream
=======
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
  }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
