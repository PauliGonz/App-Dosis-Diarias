import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full' }, // Página inicial
  {
    path: '',
    component: AppComponent, // Menú lateral principal
    children: [
      { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
      { path: 'bienvenida', loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule) },
      { path: 'agregar-recordatorio', loadChildren: () => import('./agregar-recordatorio/agregar-recordatorio.module').then(m => m.AgregarRecordatorioPageModule) },
      { path: 'buscador', loadChildren: () => import('./buscador/buscador.module').then(m => m.BuscadorPageModule) },
      { path: 'buscador-medicamentos', loadChildren: () => import('./buscador-medicamentos/buscador-medicamentos.module').then(m => m.BuscadorMedicamentosPageModule) },
      { path: 'cuenta', loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaPageModule) },
      { path: 'frecuencia-dosis', loadChildren: () => import('./frecuencia-dosis/frecuencia-dosis.module').then(m => m.FrecuenciaDosisPageModule) },
      { path: 'recordatorio-exitoso', loadChildren: () => import('./recordatorio-exitoso/recordatorio-exitoso.module').then(m => m.RecordatorioExitosoPageModule) },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

