import { TableComponent } from './table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {  IntersceptorService } from "./shared/interseptor.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    AppComponent,
    TableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: IntersceptorService,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }