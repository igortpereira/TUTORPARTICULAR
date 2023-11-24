import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelEnsinoPage } from './nivel-ensino.page';

const routes: Routes = [
  {
    path: '',
    component: NivelEnsinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelEnsinoPageRoutingModule {}
