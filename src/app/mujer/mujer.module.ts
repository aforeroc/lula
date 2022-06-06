import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MujerComponent } from './mujer.component';
import { SharedModule } from '../shared/shared.module';
import { VistazapatoComponent } from '../vistazapato/vistazapato.component';
import { VistazapatoModule } from '../vistazapato/vistazapato.module';



@NgModule({
  declarations: [
    MujerComponent
  ],
  exports: [
    MujerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VistazapatoModule
  ]
})
export class MujerModule { }
