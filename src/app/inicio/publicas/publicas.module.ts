import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicasPageRoutingModule } from './publicas-routing.module';

import { PublicasPage } from './publicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicasPageRoutingModule
  ],
  declarations: [PublicasPage]
})
export class PublicasPageModule {}
