import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GridListComponent } from './grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
