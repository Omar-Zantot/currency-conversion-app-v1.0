import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DropdownItem } from 'src/app/service/currency.model';
import { CurrencyService } from 'src/app/service/fetch-data.service';
import { CurrencyCompare } from 'src/app/service/currency.model';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
})
export class CompareComponent {
  @ViewChild('selectfrom', { static: false }) selectfrom?: ElementRef;
  @ViewChild('selecttarget1', { static: false }) selecttarget1?: ElementRef;
  @ViewChild('selecttarget2', { static: false }) selecttarget2?: ElementRef;
  @Input() showLoader = false; // Receive showLoader as Input

  selectedCurrencyFrom!: string;
  selectedCurrencyTo1!: string;
  selectedCurrencyTo2!: string;
  inputValue: string = '';
  resultValue1: string = '';
  resultValue2: string = '';

  constructor(private currencyService: CurrencyService) {
    this.setDefaultCurrencies();
  }
  setDefaultCurrencies() {
    this.selectedCurrencyFrom = 'EGP';
    this.selectedCurrencyTo1 = 'USD';
    this.selectedCurrencyTo2 = 'GBP';
  }

  getSelectedValue() {
    if (this.isValidInput()) {
      this.showLoader = true;
      const v$ = this.currencyService.getCompareResult(
        this.selectedCurrencyFrom,
        `${this.selectedCurrencyTo1},${this.selectedCurrencyTo2}`,
        parseFloat(this.inputValue)
      );
      v$.subscribe({
        next: (conversionResults: CurrencyCompare[]) => {
          if (conversionResults.length >= 2) {
            this.resultValue1 = (
              conversionResults[0].value * parseFloat(this.inputValue)
            ).toFixed(4);
            this.resultValue2 = (
              conversionResults[1].value * parseFloat(this.inputValue)
            ).toFixed(4);
          }
        },
        error: (error) => {
          console.error('Error fetching comparison data:', error);
        },
        complete: () => {
          this.showLoader = false;
        },
      });
    } else {
      this.resultValue1 = '';
      this.resultValue2 = '';
    }
  }

  isValidInput(): boolean {
    return (
      !isNaN(parseFloat(this.inputValue)) && parseFloat(this.inputValue) >= 0
    );
  }
  onCurrencySelected(selectedCurrency: DropdownItem, key: string) {
    const selectedCurrencyCode = selectedCurrency.code;
    if (key === 'From') {
      this.selectedCurrencyFrom = selectedCurrencyCode;
    } else if (key === 'To1') {
      this.selectedCurrencyTo1 = selectedCurrencyCode;
    } else if (key === 'To2') {
      this.selectedCurrencyTo2 = selectedCurrencyCode;
    }
  }
}
