import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CaballeroComponent } from './caballero/caballero.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SinformacionComponent } from './sinformacion/sinformacion.component';


const routes: Routes = [
  
  {
    path:'sinformacion',
    component: SinformacionComponent,//por el momento en lo que hacemos la pagina principal
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
  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
