import { Injectable } from '@angular/core';
import { CurrencyService } from '../service/fetch-data.service';
import { Currency } from '../service/currency.model';
import { BehaviorSubject, finalize, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private currencyService: CurrencyService) {}

  fetchExchangeRates(currencyList: Currency[], baseCurrency: string) {
    console.log('from service');

    const targetCurrencies = (currencyList.filter((c) => c.checked) ?? []).map(
      (c) => c.code
    );
    console.log(targetCurrencies.length);

    return this.currencyService
      .getLiveExchangeRates(baseCurrency, targetCurrencies)
      .pipe(
        first(),
        map((rates) => {
          const _mappedCurrencies = currencyList.map((c) => {
            const _currencyRate = rates.find((r) => r?.to === c.code);
            console.log(_currencyRate?.rate, 'rate');

            return { ...c, rate: _currencyRate?.rate } as Currency;
          });
          return _mappedCurrencies;
        })
      );
  }

  private selectedCurrencyFromSource = new BehaviorSubject<string>('EGP');
  selectedCurrencyFrom$ = this.selectedCurrencyFromSource.asObservable();

  setSelectedCurrencyFrom(currency: string) {
    this.selectedCurrencyFromSource.next(currency);
  }
}
