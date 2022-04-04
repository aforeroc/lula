import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TendenciaComponent } from './tendencia.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TendenciaComponent
  ],
  exports: [
    TendenciaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TendenciaModule { }
