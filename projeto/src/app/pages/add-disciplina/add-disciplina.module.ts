import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDisciplinaPageRoutingModule } from './add-disciplina-routing.module';

import { AddDisciplinaPage } from './add-disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDisciplinaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddDisciplinaPage]
})
export class AddDisciplinaPageModule {}
