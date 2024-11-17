import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorMedicamentosPageRoutingModule } from './buscador-medicamentos-routing.module';

import { BuscadorMedicamentosPage } from './buscador-medicamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorMedicamentosPageRoutingModule
  ],
  declarations: [BuscadorMedicamentosPage]
})
export class BuscadorMedicamentosPageModule {}
