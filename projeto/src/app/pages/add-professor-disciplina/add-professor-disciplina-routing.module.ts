import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProfessorDisciplinaPage } from './add-professor-disciplina.page';

const routes: Routes = [
  {
    path: '',
    component: AddProfessorDisciplinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProfessorDisciplinaPageRoutingModule {}
