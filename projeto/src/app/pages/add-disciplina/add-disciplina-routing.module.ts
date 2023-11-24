import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDisciplinaPage } from './add-disciplina.page';

const routes: Routes = [
  {
    path: '',
    component: AddDisciplinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDisciplinaPageRoutingModule {}
