import { Component, Input, OnInit, Output } from '@angular/core';
import { Currency } from 'src/app/service/currency.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent implements OnInit {
  @Input() currency!: Currency;
  @Output() isload: boolean = this.currency ? true : false;

  ngOnInit(): void {}
  // @Input() ImgUrlFlag: string =
  //   'https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?w=1380&t=st=1692879206~exp=1692879806~hmac=9636e3948655598f19bef0ae9caf4bb7f2a07485c8eafa25ee77be9604d14e83';
  // @Input() currencyName: string = 'USD';
}
