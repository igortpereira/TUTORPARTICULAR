import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFormatoAulaPage } from './add-formato-aula.page';

const routes: Routes = [
  {
    path: '',
    component: AddFormatoAulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFormatoAulaPageRoutingModule {}
