import {AxiosResponse} from 'axios';
import {httpClient} from './httpClient';
import {Invoice} from '@/common/models/Invoice';

export const getInvoices = (): Promise<AxiosResponse<Array<Invoice>>> => {
  return httpClient.get('/invoices');
};

export const getInvoiceById = (invoiceId: string) => {
  return httpClient.get(`/invoices/${invoiceId}`);
}