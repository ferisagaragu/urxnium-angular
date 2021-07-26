import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrxAlertModule, UrxFormatModule } from 'ng-urxnium';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UrxAlertModule,
    UrxFormatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
