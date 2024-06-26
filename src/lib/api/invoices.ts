import {AxiosResponse} from 'axios';
import {httpClient} from './httpClient';
import {Invoice} from '@/common/models/Invoice';
import {CreateInvoiceDto} from '@/common/dto/CreateInvoiceDTO';

export const getInvoices = (): Promise<AxiosResponse<Array<Invoice>>> => {
  return httpClient.get('/invoices');
};

export const getInvoiceById = (invoiceId: string): Promise<AxiosResponse<Invoice>> => {
  return httpClient.get(`/invoices/${invoiceId}`);
};

export const markInvoiceAsPaid = (invoiceId: number): Promise<AxiosResponse<Invoice>> => {
  return httpClient.put(`/invoices/${invoiceId}/paid`);
};

export const deleteInvoice = (invoiceId: number): Promise<AxiosResponse<Invoice>> => {
  return httpClient.delete(`/invoices/${invoiceId}`);
};

export const createInvoice = (dto: CreateInvoiceDto): Promise<AxiosResponse<Invoice>> => {
  return httpClient.post('/invoices', dto);
};
