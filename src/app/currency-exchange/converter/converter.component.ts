import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { finalize } from 'rxjs';
import {
  CurrencyConversion,
  DropdownItem,
} from 'src/app/service/currency.model';
import { CurrencyService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  @ViewChild('dropdownFrom', { static: false }) dropdownFrom?: ElementRef;
  @ViewChild('dropdownTo', { static: false }) dropdownTo?: ElementRef;
  // protected showLoader = true;
  @Input() showLoader = false; // Receive showLoader as Input
  inputValue!: number;
  outputValue: string = '';

  selectedCurrencyFrom!: string | null;
  selectedCurrencyTo!: string | null;
  errorMessage: string | null = null;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    // Initialize default values here if needed
    this.setDefaultCurrencies();
  }

  setDefaultCurrencies() {
    this.selectedCurrencyFrom = 'EGP';
    this.selectedCurrencyTo = 'USD';
  }

  getSelectValue() {
    this.performCurrencyConversion();
  }

  performCurrencyConversion() {
    if (!this.isValidInput() && !this.inputValue) {
      this.errorMessage = 'Please enter a valid amount.';
      alert(this.errorMessage);
      return;
    }

    if (
      this.isValidInput() &&
      this.selectedCurrencyFrom &&
      this.selectedCurrencyTo
    ) {
      console.log('clicked');
      this.showLoader = true;

      const v$ = this.currencyService.getConvertResult(
        this.selectedCurrencyFrom,
        this.selectedCurrencyTo,
        this.inputValue
      );
      v$.subscribe({
        next: (conversionResult) => {
          this.outputValue = conversionResult.value.toFixed(2);
          this.showLoader = false;
        },
        error: (error) => {
          console.error('Conversion error:', error);
        },
        complete: () => {
          this.showLoader = false;
          // Hide loader when data is fetched
        },
      });
    }
  }

  isValidInput(): boolean {
    return !isNaN(this.inputValue) && this.inputValue >= 0;
  }

  onCurrencySelected(selectedCurrency: DropdownItem, isFromDropdown: boolean) {
    const selectedCurrencyCode = selectedCurrency.code;

    if (isFromDropdown) {
      this.selectedCurrencyFrom = selectedCurrencyCode;
      if (this.selectedCurrencyFrom === this.selectedCurrencyTo) {
        this.selectedCurrencyTo = null;
      }
    } else {
      this.selectedCurrencyTo = selectedCurrencyCode;
      if (this.selectedCurrencyTo === this.selectedCurrencyFrom) {
        this.selectedCurrencyFrom = null;
      }
    }
    // this.selectedCurrency.emit(selectedCurrencyCode);
  }
}
