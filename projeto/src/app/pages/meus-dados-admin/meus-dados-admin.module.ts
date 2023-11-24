import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusDadosAdminPageRoutingModule } from './meus-dados-admin-routing.module';

import { MeusDadosAdminPage } from './meus-dados-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusDadosAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MeusDadosAdminPage]
})
export class MeusDadosAdminPageModule {}
