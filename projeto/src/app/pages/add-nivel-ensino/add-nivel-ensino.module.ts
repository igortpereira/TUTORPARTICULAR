import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNivelEnsinoPageRoutingModule } from './add-nivel-ensino-routing.module';

import { AddNivelEnsinoPage } from './add-nivel-ensino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNivelEnsinoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddNivelEnsinoPage]
})
export class AddNivelEnsinoPageModule {}
