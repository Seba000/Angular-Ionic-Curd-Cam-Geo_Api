import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'leerqr',
    loadChildren: () => import('./leerqr/leerqr.module').then( m => m.LeerqrPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'publicas',
    loadChildren: () => import('./publicas/publicas.module').then( m => m.PublicasPageModule)
  },
  {
    path: 'us',
    loadChildren: () => import('./us/us.module').then( m => m.UsPageModule)
  },
  {
    path: 'ca',
    loadChildren: () => import('./ca/ca.module').then( m => m.CaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
