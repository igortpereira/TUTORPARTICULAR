import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelEnsinoPageRoutingModule } from './nivel-ensino-routing.module';

import { NivelEnsinoPage } from './nivel-ensino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelEnsinoPageRoutingModule
  ],
  declarations: [NivelEnsinoPage]
})
export class NivelEnsinoPageModule {}
