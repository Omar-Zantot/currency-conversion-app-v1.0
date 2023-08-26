import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../service/currency.model';
import { Observable } from 'rxjs';

@Pipe({
  name: 'getFavCurrency',
})
export class GetFavCurrencyPipe implements PipeTransform {
  transform(
    currencyList: Currency[],
    fetchExchangeRates: (currencyList: Currency[]) => Observable<Currency[]>
  ) {
    return fetchExchangeRates(currencyList);
  }
}
