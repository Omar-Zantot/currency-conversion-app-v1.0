import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustumInputComponent } from './ui-components/custum-input/custum-input.component';
import { ToggleBtnsComponent } from './ui-components/toggle-btns/toggle-btns.component';
import { CurrencyCardComponent } from './ui-components/currency-card/currency-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustumInputComponent,
    ToggleBtnsComponent,
    CurrencyCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
