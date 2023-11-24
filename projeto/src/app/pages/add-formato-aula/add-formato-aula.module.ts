import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFormatoAulaPageRoutingModule } from './add-formato-aula-routing.module';

import { AddFormatoAulaPage } from './add-formato-aula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFormatoAulaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddFormatoAulaPage]
})
export class AddFormatoAulaPageModule {}
