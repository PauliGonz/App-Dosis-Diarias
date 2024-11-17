import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrecuenciaDosisPageRoutingModule } from './frecuencia-dosis-routing.module';

import { FrecuenciaDosisPage } from './frecuencia-dosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrecuenciaDosisPageRoutingModule
  ],
  declarations: [FrecuenciaDosisPage]
})
export class FrecuenciaDosisPageModule {}
