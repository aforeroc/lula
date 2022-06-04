import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SinformacionModule } from './sinformacion/sinformacion.module';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TendenciaModule } from './tendencia/tendencia.module';
import { HttpClientModule } from "@angular/common/http";
import { InicioModule } from './inicio/inicio.module';
import { MujerModule } from './mujer/mujer.module';
import { VistazapatoModule } from './vistazapato/vistazapato.module';
import { BonoModule } from './bono/bono.module';
import { CaballeroModule } from './caballero/caballero.module';
import { DescuentosModule } from './descuentos/descuentos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SinformacionModule,
    LoginModule,
    RegistroModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    TendenciaModule,
    InicioModule,
    MujerModule,
    VistazapatoModule,
    BonoModule,
    CaballeroModule,
    DescuentosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
