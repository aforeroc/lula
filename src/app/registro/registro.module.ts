import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  exports: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class RegistroModule { }
