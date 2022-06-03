import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciooComponent } from './inicioo.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IniciooComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    IniciooComponent
  ]
})
export class IniciooModule { }
