import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinformacionComponent } from './sinformacion.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SinformacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SinformacionComponent
  ]
})
export class SinformacionModule { }
