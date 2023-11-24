import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoCadastroPageRoutingModule } from './tipo-cadastro-routing.module';

import { TipoCadastroPage } from './tipo-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoCadastroPageRoutingModule
  ],
  declarations: [TipoCadastroPage]
})
export class TipoCadastroPageModule {}
