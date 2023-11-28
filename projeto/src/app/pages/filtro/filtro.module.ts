import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroPageRoutingModule } from './filtro-routing.module';

import { FiltroPage } from './filtro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FiltroPage]
})
export class FiltroPageModule {}
