import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './service/fetch-data.service';
import { Currency, ExchangeRate } from './service/currency.model';
// import { TargetCurrencies } from './service/data.static';
import { delay, finalize, first, map, switchMap, take } from 'rxjs';
import { ToggleStaticsData } from './static/toggle-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggleData = ToggleStaticsData;
  activeTab = ToggleStaticsData[0].status;
  protected showLoader = true;
  public showFavoriteCurrencies = false;

  protected currenciesFromAPI$ = this._initGetCurrencies();

  baseCurrency = 'EGP';
  // targetCurrencies = TargetCurrencies;

  exchangeRates: ExchangeRate[] = [];

  constructor(private currencyService: CurrencyService) {}

  private _initGetCurrencies() {
    return this.currencyService.getCurrenciesFromStore$.pipe(
      switchMap((currencyList) => {
        console.log(currencyList);
        return this.fetchExchangeRates(currencyList);
      })
    );
  }

  protected fetchExchangeRates(currencyList: Currency[]) {
    const targetCurrencies = (currencyList.filter((c) => c.checked) ?? []).map(
      (c) => c.code
    );

    return this.currencyService
      .getLiveExchangeRates(this.baseCurrency, targetCurrencies)
      .pipe(
        first(),
        map((rates) => {
          const _mappedCurrencies = currencyList.map((c) => {
            const _currencyRate = rates.find((r) => r?.to === c.code);
            return { ...c, rate: _currencyRate?.rate } as Currency;
          });
          return _mappedCurrencies;
        }),
        finalize(() => (this.showLoader = false))
      );
  }

  protected toggleCurrency(currency: Currency, currencyList: Currency[]) {
    currency.checked = !currency.checked;

    const _favoriteCurrencies = JSON.parse(
      localStorage.getItem('selectedCurrencies') ?? '[]'
    ) as Currency[];

    const _favoriteCurrencyIndex = _favoriteCurrencies.findIndex(
      (c) => currency.code === c.code
    );

    _favoriteCurrencyIndex === -1
      ? _favoriteCurrencies.push(currency)
      : _favoriteCurrencies.splice(_favoriteCurrencyIndex, 1);
    // Update checked property of the selected currency

    // Save selected currencies to local storage
    localStorage.setItem(
      'selectedCurrencies',
      JSON.stringify(_favoriteCurrencies)
    );

    this.currencyService.currenciesStore$.next(currencyList);
  }
}
