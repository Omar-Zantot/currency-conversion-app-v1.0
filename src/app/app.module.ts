import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustumInputComponent as CustomInputComponent } from './ui-components/custum-input/custum-input.component';
import { ToggleBtnsComponent } from './ui-components/toggle-btns/toggle-btns.component';
import { CurrencyCardComponent } from './ui-components/currency-card/currency-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './ui-components/loader/loader.component';
import { FilterFavCurrencyPipe } from './pipes/filter-fav-currency.pipe';
import { GetFavCurrencyPipe } from './pipes/get-fav-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    ToggleBtnsComponent,
    CurrencyCardComponent,
    LoaderComponent,
    FilterFavCurrencyPipe,
    GetFavCurrencyPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
