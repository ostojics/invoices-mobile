import {InferType, number, object, string} from 'yup';

export const createInvoiceSchema = object({
  name: string().required('Name is required'),
  city: string().required('City is required'),
  country: string().required('Country is required'),
  email: string().email().required('Email is required'),
  description: string().required('Description is required'),
  address: string().required('Address is required'),
  amount: string().required('Amount is required'),
  dueDate: string().required('Due date is required'),
});

export type CreateInvoiceFormData = InferType<typeof createInvoiceSchema>;

export interface CreateInvoiceDto {
  billFromEmail: string;
  billFromCity: string;
  billFromAddress: string;
  billFromCountry: string;
  billToName: string;
  billToCity: string;
  billToAddress: string;
  billToCountry: string;
  billToEmail: string;
  dueDate: string;
  description: string;
  amount: number;
  billFromName: string;
}
