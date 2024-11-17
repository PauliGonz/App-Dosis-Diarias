import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordatorioExitosoPage } from './recordatorio-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: RecordatorioExitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordatorioExitosoPageRoutingModule {}
