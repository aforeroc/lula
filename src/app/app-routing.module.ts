import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SinformacionComponent } from './sinformacion/sinformacion.component';
import { RegistroComponent } from './registro/registro.component';
import { TendenciaComponent } from './tendencia/tendencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { MujerComponent } from './mujer/mujer.component';
import { CaballeroComponent } from './caballero/caballero.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { BonoComponent } from './bono/bono.component';


const routes: Routes = [

  {
    path: '',
    component: InicioComponent
  },

  {
    path:'sinformacion',
    component: SinformacionComponent,//por el momento en lo que hacemos la pagina principal
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'registro',
    component: RegistroComponent
  },

  {
    path: 'tendencia',
    component: TendenciaComponent
  },

  {
    path: 'mujer',
    component: MujerComponent
  },

  {
    path: 'caballero',
    component: CaballeroComponent
  },

  {
    path: 'descuentos',
    component: DescuentosComponent
  },

  {
    path: 'bono',
    component: BonoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
