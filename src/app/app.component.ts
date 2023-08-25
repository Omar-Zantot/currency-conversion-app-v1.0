import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyService } from './service/fetch-data.service';
import { Currency } from './service/currency.model';
// import { CurrencyCardComponent } from './ui-components/currency-card/currency-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency-conversion-app';

  // & list of currencies
  // currencyList!: Currency[];
  currencies: Currency[] = [];
  selectedCurrencies: Currency[] = [];
  showCurrencyList: boolean = true;
  // @ViewChild(CurrencyCardComponent) child!: CurrencyCardComponent;
  // Load = this.child.isload;

  // ratedata: any;
  // convertedata: any;
  // comparedata: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    //  * list for cuntries-name  and flags

    this.currencyService.getCurrencyApi().subscribe((res) => {
      this.currencies = res;
      console.log(this.currencies);
    });

    // // * used in favorites section to display the favorites with rate
    // this.currencyService.getFavoritesRate().subscribe((favorites) => {
    //   this.ratedata = favorites;
    //   console.log(this.ratedata);
    // });

    // // * convert api used in convert section
    // // * (get input_amount,base_currency as from , target_currency as to )
    // this.currencyService.getConversionResult().subscribe((result) => {
    //   this.convertedata = result;
    //   console.log(this.convertedata);
    // });

    // // * compare api used in comare section
    // // * (get input_amount,base_currency as from , target_currency as to )
    // this.currencyService.getCompareResult().subscribe((res) => {
    //   this.comparedata = res;
    //   console.log(this.comparedata);
    // });
  }
  toggleCurrency(currency: Currency) {
    const index = this.selectedCurrencies.indexOf(currency);
    if (index === -1) {
      this.selectedCurrencies.push(currency);
    } else {
      this.selectedCurrencies.splice(index, 1);
    }
  }

  toggleCurrencyList() {
    this.showCurrencyList = !this.showCurrencyList;
  }
}
function output(): (target: AppComponent, propertyKey: 'isload') => void {
  throw new Error('Function not implemented.');
}
