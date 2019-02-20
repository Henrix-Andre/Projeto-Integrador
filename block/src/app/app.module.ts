import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { Lvl2Component } from './lvl2/lvl2.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    Lvl2Component,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
