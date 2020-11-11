import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { GastoComponent } from './componentes/gasto/gasto.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormOperacionComponent } from './componentes/form-operacion/form-operacion.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    GastoComponent,
    HomeComponent,
    FormOperacionComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
