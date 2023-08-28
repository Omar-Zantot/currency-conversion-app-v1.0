import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleBtnsComponent } from './ui-components/btns/toggle-btns/toggle-btns.component';
import { CurrencyCardComponent } from './ui-components/currency-card/currency-card.component';
import { HttpClientModule } from '@angular/common/http';
// import { LoaderComponent } from './shared/loader/loader.component';
import { FilterFavCurrencyPipe } from './pipes/filter-fav-currency.pipe';
import { GetFavCurrencyPipe } from './pipes/get-fav-currency.pipe';
import { CloseBtnComponent } from './ui-components/btns/close-btn/close-btn.component';
import { AddBtnComponent } from './ui-components/btns/add-btn/add-btn.component';
import { CurrencyExchangeModule } from './currency-exchange/currency-exchange.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ToggleBtnsComponent,
    CurrencyCardComponent,
    FilterFavCurrencyPipe,
    GetFavCurrencyPipe,
    CloseBtnComponent,
    AddBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CurrencyExchangeModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
