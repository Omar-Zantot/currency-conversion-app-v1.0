import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Currency, DropdownItem } from 'src/app/service/currency.model';
import { CurrencyService } from 'src/app/service/fetch-data.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  @ViewChild('dropdownFrom', { static: false }) dropdownFrom?: ElementRef;
  @ViewChild('dropdownTo', { static: false }) dropdownTo?: ElementRef;
  @Input() showLoader = false; // Receive showLoader as Input
  inputValue!: number;
  outputValue: string = '';
  storedCurrencyList = localStorage.getItem('currencyList');
  parsedCurrencyList!: Currency[];

  selectedCurrencyFrom!: string | null;
  selectedCurrencyTo!: string | null;
  errorMessage: string | null = null;

  constructor(
    private currencyService: CurrencyService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    // Initialize default values here if needed
    this.setDefaultCurrencies();
  }

  getCurrencyList(): Currency[] {
    if (this.storedCurrencyList) {
      this.parsedCurrencyList = JSON.parse(this.storedCurrencyList);
    }
    return this.parsedCurrencyList;
  }

  setDefaultCurrencies() {
    this.selectedCurrencyFrom = 'EGP';
    this.selectedCurrencyTo = 'USD';
  }

  getSelectValue() {
    this.performCurrencyConversion();
  }

  onConvertButtonClicked() {
    // Call the onConvertButtonClicked method in AppComponent
    this.sharedService.fetchExchangeRates(
      this.getCurrencyList(),
      this.selectedCurrencyFrom as string
    );
  }

  performCurrencyConversion() {
    if (!this.isValidInput()) {
      this.errorMessage = 'Please enter a valid amount.';
      return;
    } else {
      this.errorMessage = null;

      // Clear the error message here
    }

    if (
      this.isValidInput() &&
      this.selectedCurrencyFrom &&
      this.selectedCurrencyTo
    ) {
      if (this.inputValue) this.showLoader = true;
      this.onConvertButtonClicked();

      const v$ = this.currencyService.getConvertResult(
        this.selectedCurrencyFrom,
        this.selectedCurrencyTo,
        this.inputValue
      );
      v$.subscribe({
        next: (conversionResult) => {
          this.outputValue = conversionResult.value.toFixed(4);
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
    return !isNaN(this.inputValue) && this.inputValue > 0;
  }

  onCurrencySelected(selectedCurrency: DropdownItem, isFromDropdown: boolean) {
    const selectedCurrencyCode = selectedCurrency.code;

    if (isFromDropdown) {
      // Update selectedCurrencyFrom in your existing logic
      this.selectedCurrencyFrom = selectedCurrencyCode;
      if (this.selectedCurrencyFrom === this.selectedCurrencyTo) {
        this.selectedCurrencyTo = null;
      }

      // Call shared service to update selectedCurrencyFrom
      this.sharedService.setSelectedCurrencyFrom(this.selectedCurrencyFrom);
    } else {
      this.selectedCurrencyTo = selectedCurrencyCode;
      if (this.selectedCurrencyTo === this.selectedCurrencyFrom) {
        this.selectedCurrencyFrom = null;
      }

      if (!isNaN(this.inputValue) && this.inputValue > 0) {
        const storeAmount = this.inputValue;
      }
    }
  }
}
