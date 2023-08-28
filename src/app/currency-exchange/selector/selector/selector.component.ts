import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface DropdownItem {
  code: string;
  flagUrl: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  menuList: DropdownItem[] = [];
  storedCurrencyList = localStorage.getItem('currencyList');
  @Input() defaultCurrencyCode = '';

  @Input() customStyles: string[] = [];

  ngOnInit(): void {
    if (this.storedCurrencyList) {
      const parsedCurrencyList: DropdownItem[] = JSON.parse(
        this.storedCurrencyList
      );

      this.menuList = parsedCurrencyList.map((currency) => {
        return {
          code: currency.code,
          flagUrl: currency.flagUrl,
        };
      });
      // Find the default currency by code
      const defaultCurrency = this.menuList.find(
        (currency) => currency.code === this.defaultCurrencyCode
      );

      if (defaultCurrency) {
        this.selectedCurrencyItem = defaultCurrency;
      }
    }
  }

  isDropdownOpen = false;
  @Output() selectedCurrency = new EventEmitter<DropdownItem>();
  selectedCurrencyItem: DropdownItem | null = null;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCurrency(currency: DropdownItem) {
    this.selectedCurrencyItem = currency;
    this.toggleDropdown();
    this.selectedCurrency.emit(currency);
  }
}
