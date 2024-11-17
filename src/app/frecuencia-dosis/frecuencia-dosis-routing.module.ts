import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrecuenciaDosisPage } from './frecuencia-dosis.page';

const routes: Routes = [
  {
    path: '',
    component: FrecuenciaDosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrecuenciaDosisPageRoutingModule {}
