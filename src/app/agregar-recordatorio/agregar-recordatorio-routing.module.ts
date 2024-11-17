import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRecordatorioPage } from './agregar-recordatorio.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRecordatorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRecordatorioPageRoutingModule {}
