import { NgModule } from '@angular/core';
import { FrDropdownComponent } from './fr-dropdown.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FrDropdownComponent],
  imports: [
    BrowserModule, FormsModule 
  ],
  exports: [FrDropdownComponent]
})
export class FrDropdownModule { }
