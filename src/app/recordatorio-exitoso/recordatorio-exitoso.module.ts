import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordatorioExitosoPageRoutingModule } from './recordatorio-exitoso-routing.module';

import { RecordatorioExitosoPage } from './recordatorio-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordatorioExitosoPageRoutingModule
  ],
  declarations: [RecordatorioExitosoPage]
})
export class RecordatorioExitosoPageModule {}
