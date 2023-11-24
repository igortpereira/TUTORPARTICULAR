import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoCadastroPage } from './tipo-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: TipoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoCadastroPageRoutingModule {}
