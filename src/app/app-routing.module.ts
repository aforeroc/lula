import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SinformacionComponent } from './sinformacion/sinformacion.component';
import { RegistroComponent } from './registro/registro.component';
import { TendenciaComponent } from './tendencia/tendencia.component';


const routes: Routes = [
  
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
  }

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
