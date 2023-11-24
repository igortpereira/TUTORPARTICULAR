import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioProfessorPage } from './inicio-professor.page';

const routes: Routes = [
  {
    path: '',
    component: InicioProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioProfessorPageRoutingModule {}
