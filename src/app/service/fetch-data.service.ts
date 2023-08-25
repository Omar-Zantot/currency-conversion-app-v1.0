import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from './currency.model';
// Import the Currency interface

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseUrl =
    'https://currency-converter-production-3e05.up.railway.app/api/currency-conversions';

  apiUrl = `${this.baseUrl}/currencies`;

  rateApi = `${this.baseUrl}/rates?from=USD&to=EGP`;

  convert = `${this.baseUrl}/convert?from=USD&to=EGP&amount=1000`;

  compare = `${this.baseUrl}/compare?from=EGP&to=USD,EUR&amount=20`;

  constructor(private http: HttpClient) {
    console.log('from CurrencyService');
  }

  getCurrencyApi(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl);
  }

  getFavoritesRate() {
    return this.http.get(this.rateApi);
  }
  getConversionResult() {
    return this.http.get(this.convert);
  }
  getCompareResult() {
    return this.http.get(this.compare);
  }
}
