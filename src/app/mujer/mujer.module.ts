import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MujerComponent } from './mujer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MujerComponent
  ],
  exports: [
    MujerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MujerModule { }
