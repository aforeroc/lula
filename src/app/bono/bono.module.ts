import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonoComponent } from './bono.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BonoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    BonoComponent
  ]
})
export class BonoModule { }
