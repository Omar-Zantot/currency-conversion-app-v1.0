export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
}

export interface Currency extends ExchangeRate {
  code: string;
  flagUrl: string;
  desc: string;
  // added by FE
  checked: boolean;
}
