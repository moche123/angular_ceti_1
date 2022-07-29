import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { PadreComponent } from './comunicacion/padre/padre.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PipeDirectivaComponent } from './pipe-directiva/pipe-directiva.component';

const routes: Routes = [
  {
    path: '',
    component: BotonesComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'padre',
    component: PadreComponent 
  },
  {
    path: 'pipe-directiva',
    component: PipeDirectivaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
