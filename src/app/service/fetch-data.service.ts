import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  filter,
  first,
  interval,
  map,
  noop,
  startWith,
  tap,
} from 'rxjs';
import {
  Currency,
  CurrencyCompare,
  CurrencyConversion,
  ExchangeRate,
} from './currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  /** URLs */
  private baseUrl =
    'http://ec2-3-144-40-233.us-east-2.compute.amazonaws.com:8000/api/currency-conversions';
  private currenciesListUrl = `${this.baseUrl}/currencies`;

  public currenciesStore$ = new BehaviorSubject<Currency[]>([]);
  public getCurrenciesFromStore$ = this.currenciesStore$
    .asObservable()
    .pipe(filter((v) => !!v?.length));

  constructor(private http: HttpClient) {
    this.getConvertResult('USD', 'EGP', 200);

    interval(3600000)
      .pipe(
        startWith(0),
        tap(() => {
          this.getCurrencyApi();
        })
      )
      .subscribe(noop);
  }

  private getCurrencyApi() {
    this.http
      .get<Currency[]>(this.currenciesListUrl)
      .pipe(
        first(),
        map((currencies) => {
          return this.updateCurrenciesStore(currencies);
        })
      )
      .subscribe(noop);
  }

  public getLiveExchangeRates(
    baseCurrency: string,
    targetCurrencies: string[]
  ): Observable<ExchangeRate[]> {
    const targetCurrenciesStr = targetCurrencies.join(',');
    const liveExchangeRateUrl = `${this.baseUrl}/rates?from=${baseCurrency}&to=${targetCurrenciesStr}`;
    return this.http.get<ExchangeRate[]>(liveExchangeRateUrl);
  }

  public updateCurrenciesStore(currencies?: Currency[]) {
    const favoriteCurrencies: Currency[] = this.getFavCurrencies();
    const _mappedCurrencies = (
      currencies ?? this.currenciesStore$.getValue()
    ).map((currency) => {
      currency.checked = !!favoriteCurrencies.find(
        (favoriteCurrency) => favoriteCurrency.code === currency.code
      );
      // push to the store
      return currency;
    });

    this.currenciesStore$.next(_mappedCurrencies);
    return _mappedCurrencies;
  }

  private getFavCurrencies() {
    return JSON.parse(
      localStorage.getItem('selectedCurrencies') ?? '[]'
    ) as Currency[];
  }

  public getConvertResult(
    from: string,
    to: string,
    amount: number
  ): Observable<CurrencyConversion> {
    const converterUrl = `${this.baseUrl}/convert?from=${from}&to=${to}&amount=${amount}`;
    return this.http.get<CurrencyConversion>(converterUrl);
  }

  getCompareResult(
    from: string,
    to: string,
    amount: number
  ): Observable<CurrencyCompare[]> {
    // EGP,BGP
    const compareterUrl = `${this.baseUrl}/compare?from=${from}&to=${to}&amount=${amount}`;
    return this.http.get<CurrencyCompare[]>(compareterUrl);
  }
}
