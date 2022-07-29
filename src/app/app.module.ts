import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PadreComponent } from './comunicacion/padre/padre.component';
import { HijoComponent } from './comunicacion/hijo/hijo.component';
import { PipeDirectivaComponent } from './pipe-directiva/pipe-directiva.component';
import { NavegacionComponent } from './particulas/navegacion/navegacion.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdenarEdadPipe } from './pipe-directiva/pipe/ordenar-edad.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    PersonajesComponent,
    FormularioComponent,
    PadreComponent,
    HijoComponent,
    PipeDirectivaComponent,
    NavegacionComponent,
    OrdenarEdadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
