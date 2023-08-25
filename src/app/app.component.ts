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
  currencies: Currency[] = [];
  selectedCurrencies: Currency[] = [];
  showCurrencyList: boolean = false;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    // Load selected currencies from local storage
    const storedSelectedCurrencies = localStorage.getItem('selectedCurrencies');
    if (storedSelectedCurrencies) {
      this.selectedCurrencies = JSON.parse(storedSelectedCurrencies);
    }
    //  * list for cuntries-name  and flags

    this.currencyService.getCurrencyApi().subscribe((res) => {
      this.currencies = res.map((currency: Currency) => {
        // Initialize checked property based on selectedCurrencies
        currency.checked = this.selectedCurrencies.some(
          (c) => c.code === currency.code
        );
        return currency;
      });
    });
  }

  toggleCurrency(currency: Currency) {
    const index = this.selectedCurrencies.findIndex(
      (c) => c.code === currency.code
    );
    if (index === -1) {
      this.selectedCurrencies.push(currency);
    } else {
      this.selectedCurrencies.splice(index, 1);
    }

    // Update checked property of the selected currency
    currency.checked = !currency.checked;

    // Save selected currencies to local storage
    localStorage.setItem(
      'selectedCurrencies',
      JSON.stringify(this.selectedCurrencies)
    );
  }

  toggleCurrencyList() {
    this.showCurrencyList = !this.showCurrencyList;
  }
}

// checked = false;
// @ViewChild(CurrencyCardComponent) child!: CurrencyCardComponent;
// Load = this.child.isload;

// ratedata: any;
// convertedata: any;
// comparedata: any;

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
