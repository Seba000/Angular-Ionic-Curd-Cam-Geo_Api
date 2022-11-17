import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicasPage } from './publicas.page';

const routes: Routes = [
  {
    path: '',
    component: PublicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicasPageRoutingModule {}
