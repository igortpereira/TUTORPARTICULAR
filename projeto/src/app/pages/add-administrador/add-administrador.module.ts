import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAdministradorPageRoutingModule } from './add-administrador-routing.module';

import { AddAdministradorPage } from './add-administrador.page';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAdministradorPageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  declarations: [AddAdministradorPage]
})
export class AddAdministradorPageModule {}
