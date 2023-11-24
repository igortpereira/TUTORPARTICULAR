import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAlunoPageRoutingModule } from './inicio-aluno-routing.module';

import { InicioAlunoPage } from './inicio-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAlunoPageRoutingModule
  ],
  declarations: [InicioAlunoPage]
})
export class InicioAlunoPageModule {}
