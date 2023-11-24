import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusDadosAdminPage } from './meus-dados-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MeusDadosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusDadosAdminPageRoutingModule {}
