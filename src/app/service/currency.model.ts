export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
}

export interface Currency extends ExchangeRate {
  code: string;
  flagUrl: string;
  desc: string;
  // added
  checked: boolean;
}

export interface CurrencyConversion {
  from: string;
  to: string;
  value: number;
}

export interface DropdownItem {
  code: string;
  flagUrl: string;
}

export interface CurrencyComare {
  from: string;
  to: string;
  // to: string[];
  value: number;
}
