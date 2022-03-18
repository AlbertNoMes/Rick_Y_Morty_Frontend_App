import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrasuperiorComponent } from './barrasuperior/barrasuperior.component';
import { TarjetaComponent } from './character/tarjeta/tarjeta.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './character/detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarrasuperiorComponent,
    TarjetaComponent,
    AboutComponent,
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }