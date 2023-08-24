import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent {
  @Input() ImgUrlFlag: string =
    'https://api.exchangerate-api.com/flag-images/EU.gif';
  @Input() currencyName: string = 'USD';
}
