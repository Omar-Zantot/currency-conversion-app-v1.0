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
