import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatoAulaPageRoutingModule } from './formato-aula-routing.module';

import { FormatoAulaPage } from './formato-aula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatoAulaPageRoutingModule
  ],
  declarations: [FormatoAulaPage]
})
export class FormatoAulaPageModule {}
