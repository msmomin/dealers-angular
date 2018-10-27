
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TableComponent } from './components/table/table.component';
import { DealersService } from './services/dealers.service';
import { ObjectIteration } from './pipes/object-iteration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ObjectIteration
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DealersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
