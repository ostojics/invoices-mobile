export interface Invoice {
  amount: number;
  billFromAddress: string;
  billFromCity: string;
  billFromCountry: string;
  billFromEmail: string;
  billFromName: string;
  billToAddress: string;
  billToCity: string;
  billToCountry: string;
  billToEmail: string;
  billToName: string;
  createdAt: string;
  description: string;
  dueDate: string;
  id: number;
  status: string;
  updatedAt: string;
}
