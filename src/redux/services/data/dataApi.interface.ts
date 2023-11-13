export interface IFormData {
  income: number;
  expenses: number;
  debts: number;
  assets: number;
  [key: string]: number;
}

export interface IBusinessHealth {
  _id?: string;
  data: IFormData;
  year: string;
  month: string;
  health: string;
  lastMonth: {
    data: IFormData;
    year: string;
    month: string;
    health: string;
  };
  currentRatio?: number;
  quickRatio?: number;
  debtToEquityRatio?: number;
  netProfitMargin?: number;
}
