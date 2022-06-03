import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaballeroModule } from './caballero/caballero.module';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { SharedModule } from './shared/shared.module';
import { SinformacionModule } from './sinformacion/sinformacion.module';
import { TendenciaModule } from './tendencia/tendencia.module';
import { IniciooModule } from './inicioo/inicioo.module';
import { VistazapatoModule } from './vistazapato/vistazapato.module';
import { BonoModule } from './bono/bono.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SinformacionModule,
    LoginModule,
    IniciooModule,
    RegistroModule,
    TendenciaModule,
    CaballeroModule,
    VistazapatoModule,
    BonoModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
