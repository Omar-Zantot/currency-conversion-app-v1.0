import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/service/currency.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent {
  @Input() currency!: Currency;
}
