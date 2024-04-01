import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { RedesComponent } from './Components/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent
  ]
   
 ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
