import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescuentosComponent } from './descuentos.component';
import { SharedModule } from '../shared/shared.module';
import { VistazapatoModule } from '../vistazapato/vistazapato.module';



@NgModule({
  declarations: [
    DescuentosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VistazapatoModule
  ]
})
export class DescuentosModule { }
