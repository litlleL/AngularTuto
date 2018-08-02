import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponentTestComponent } from './angular-component-test/angular-component-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponentTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
