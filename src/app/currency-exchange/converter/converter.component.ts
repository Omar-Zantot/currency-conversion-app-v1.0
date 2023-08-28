import { Component, ElementRef, ViewChild } from '@angular/core';
import { DropdownItem } from 'src/app/service/currency.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  @ViewChild('dropdownFrom', { static: false }) dropdownFrom?: ElementRef;
  @ViewChild('dropdownTo', { static: false }) dropdownTo?: ElementRef;
  // selected?: string;
  // selectedValue?: string;
  // inputValue!: string;
  @ViewChild('dropdown', { static: false }) dropdown?: ElementRef;
  @ViewChild('select', { static: false }) select?: ElementRef;
  selected?: string;
  selectedValue?: string;
  inputValue!: number;
  outputValue: string = '';

  selectedCurrencyFrom: string | null = null;
  selectedCurrencyTo: string | null = null;

  getSelectValue() {
    // Get selected currencies from the dropdowns
    this.selectedCurrencyFrom =
      this.dropdownFrom?.nativeElement.selectedCurrencyItem;
    this.selectedCurrencyTo =
      this.dropdownTo?.nativeElement.selectedCurrencyItem;

    // Perform your conversion logic using selected currencies and input value
    if (this.selectedCurrencyFrom && this.selectedCurrencyTo) {
      // Perform your conversion here and update the outputValue
      // For example: this.outputValue = convert(this.inputValue, this.selectedCurrencyFrom, this.selectedCurrencyTo);
    }
  }

  // Handle the selected currency logic
  onCurrencySelected(selectedCurrency: DropdownItem, isFromDropdown: boolean) {
    if (isFromDropdown) {
      this.selectedCurrencyFrom = selectedCurrency.code;

      // If the selected "From" currency is the same as the "To" currency, clear the "To" currency
      if (this.selectedCurrencyFrom === this.selectedCurrencyTo) {
        this.selectedCurrencyTo = null;
      }
    } else {
      this.selectedCurrencyTo = selectedCurrency.code;

      // If the selected "To" currency is the same as the "From" currency, clear the "From" currency
      if (this.selectedCurrencyTo === this.selectedCurrencyFrom) {
        this.selectedCurrencyFrom = null;
      }


      // alert(`Input filed value${this.inputValue}`)
      // alert(`Input filed value${this.outputValue}`)

      if (!isNaN(this.inputValue) && this.inputValue > 0) {
        const storeAmount = this.inputValue;

      }
    }
  }
}