import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAlunoPage } from './inicio-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAlunoPageRoutingModule {}
