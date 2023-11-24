import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProfessorDisciplinaPageRoutingModule } from './add-professor-disciplina-routing.module';

import { AddProfessorDisciplinaPage } from './add-professor-disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProfessorDisciplinaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddProfessorDisciplinaPage]
})
export class AddProfessorDisciplinaPageModule {}
