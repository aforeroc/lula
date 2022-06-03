import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { CarroComponent } from './carro/carro.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WhatsappComponent,
    CarroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    WhatsappComponent,
    CarroComponent

  ]
})
export class SharedModule { }
