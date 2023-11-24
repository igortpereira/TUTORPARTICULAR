import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusDadosAlunoPageRoutingModule } from './meus-dados-aluno-routing.module';

import { MeusDadosAlunoPage } from './meus-dados-aluno.page';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusDadosAlunoPageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  declarations: [MeusDadosAlunoPage]
})
export class MeusDadosAlunoPageModule {}
