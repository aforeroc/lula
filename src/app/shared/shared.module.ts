import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    WhatsappComponent
  ]
})
export class SharedModule { }
