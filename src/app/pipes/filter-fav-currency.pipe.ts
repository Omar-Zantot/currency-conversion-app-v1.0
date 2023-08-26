import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../service/currency.model';

@Pipe({
  name: 'filterFavCurrency',
})
export class FilterFavCurrencyPipe implements PipeTransform {
  transform(list: Currency[]): Currency[] {
    if (!list || !list?.length) return list;

    return list.filter((c) => c.checked);
  }
}
