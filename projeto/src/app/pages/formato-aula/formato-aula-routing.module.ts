import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatoAulaPage } from './formato-aula.page';

const routes: Routes = [
  {
    path: '',
    component: FormatoAulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatoAulaPageRoutingModule {}
