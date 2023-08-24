import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl =
    'https://currency-converter-production-3e05.up.railway.app/api/currency-conversions/currencies';

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
