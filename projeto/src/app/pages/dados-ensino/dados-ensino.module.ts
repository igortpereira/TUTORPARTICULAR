import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosEnsinoPageRoutingModule } from './dados-ensino-routing.module';

import { DadosEnsinoPage } from './dados-ensino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosEnsinoPageRoutingModule
  ],
  declarations: [DadosEnsinoPage]
})
export class DadosEnsinoPageModule {}
