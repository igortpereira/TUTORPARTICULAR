import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNivelEnsinoPage } from './add-nivel-ensino.page';

const routes: Routes = [
  {
    path: '',
    component: AddNivelEnsinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNivelEnsinoPageRoutingModule {}
