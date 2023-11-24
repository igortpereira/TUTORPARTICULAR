import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusDadosProfessorPageRoutingModule } from './meus-dados-professor-routing.module';

import { MeusDadosProfessorPage } from './meus-dados-professor.page';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusDadosProfessorPageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  declarations: [MeusDadosProfessorPage]
})
export class MeusDadosProfessorPageModule {}
