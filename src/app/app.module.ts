import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BienvenidaPage } from './bienvenida/bienvenida.page';
import { InicioPage } from './inicio/inicio.page';
import { RecordatorioExitosoPage } from './recordatorio-exitoso/recordatorio-exitoso.page';
import { FrecuenciaDosisPage } from './frecuencia-dosis/frecuencia-dosis.page';
import { CuentaPage } from './cuenta/cuenta.page';
import { BuscadorMedicamentosPage } from './buscador-medicamentos/buscador-medicamentos.page';
import { AgregarRecordatorioPage } from './agregar-recordatorio/agregar-recordatorio.page';
import { BuscadorPage } from './buscador/buscador.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
