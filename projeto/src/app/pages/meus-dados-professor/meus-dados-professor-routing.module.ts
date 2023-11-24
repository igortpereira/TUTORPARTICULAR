import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusDadosProfessorPage } from './meus-dados-professor.page';

const routes: Routes = [
  {
    path: '',
    component: MeusDadosProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusDadosProfessorPageRoutingModule {}
