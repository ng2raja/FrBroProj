import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrDropdownModule } from 'fr-dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
