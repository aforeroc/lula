import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaballeroComponent } from './caballero.component';
import { SharedModule } from '../shared/shared.module';
import { VistazapatoModule } from '../vistazapato/vistazapato.module';



@NgModule({
  declarations: [
    CaballeroComponent
  ],
  exports: [
    CaballeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VistazapatoModule,
  ]
})
export class CaballeroModule { }
