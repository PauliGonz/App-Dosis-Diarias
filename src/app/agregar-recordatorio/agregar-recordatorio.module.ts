import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRecordatorioPageRoutingModule } from './agregar-recordatorio-routing.module';

import { AgregarRecordatorioPage } from './agregar-recordatorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRecordatorioPageRoutingModule
  ],
  declarations: [AgregarRecordatorioPage]
})
export class AgregarRecordatorioPageModule {}
