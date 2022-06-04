import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescuentosComponent } from './descuentos.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DescuentosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DescuentosModule { }
