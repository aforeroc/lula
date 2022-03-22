import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SinformacionComponent } from './sinformacion/sinformacion.component';


const routes: Routes = [
  
  {
    path:'sinformacion',
    component: SinformacionComponent,//por el momento en lo que hacemos la pagina principal
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
