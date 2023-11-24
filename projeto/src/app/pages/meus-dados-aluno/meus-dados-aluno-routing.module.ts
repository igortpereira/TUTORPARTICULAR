import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusDadosAlunoPage } from './meus-dados-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: MeusDadosAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusDadosAlunoPageRoutingModule {}
