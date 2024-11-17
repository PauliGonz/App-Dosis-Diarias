import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorMedicamentosPage } from './buscador-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorMedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscadorMedicamentosPageRoutingModule {}
