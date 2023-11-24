import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioProfessorPageRoutingModule } from './inicio-professor-routing.module';

import { InicioProfessorPage } from './inicio-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioProfessorPageRoutingModule
  ],
  declarations: [InicioProfessorPage]
})
export class InicioProfessorPageModule {}
