import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonoComponent } from './bono.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BonoComponent
  ],
  exports: [
    BonoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class BonoModule { }
