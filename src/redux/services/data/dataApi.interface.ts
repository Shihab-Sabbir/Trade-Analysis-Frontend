export interface IFormData {
  income: number;
  expenses: number;
  debts: number;
  assets: number;
  [key: string]: number;
}

export interface IBusinessHealth {
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
  changesFromLastMonth: {
    income: string;
    expenses: string;
    debts: string;
    assets: string;
    health: string;
  };
}
