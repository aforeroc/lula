import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaballeroComponent } from './caballero.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CaballeroComponent
  ],
  exports: [
    CaballeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CaballeroModule { }
