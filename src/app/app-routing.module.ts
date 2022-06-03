import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BonoComponent } from './bono/bono.component';
import { CaballeroComponent } from './caballero/caballero.component';
import { IniciooComponent } from './inicioo/inicioo.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CarroComponent } from './shared/carro/carro.component';
import { SinformacionComponent } from './sinformacion/sinformacion.component';
import { TendenciaComponent } from './tendencia/tendencia.component';
import { VistazapatoComponent } from './vistazapato/vistazapato.component';


const routes: Routes = [

 {
    path:'',
    component: IniciooComponent,
    pathMatch:'full'
  },
  {
    path:'sinformacion',
    component: SinformacionComponent,
  },
  {
    path:'login',
    component: LoginComponent,
    
  },
  {
    path:'registro',
    component: RegistroComponent,

  },
  {
    path:'caballero',
    component: CaballeroComponent,

  },
  {
    path: 'tendencia',
    component: TendenciaComponent
  },
  {
    path: 'carro',
    component: CarroComponent
  },
  {
    path:'vista',
    component: VistazapatoComponent
  },
  {
    path:'bono',
    component:BonoComponent
  }

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
