import {httpClient} from './httpClient';

export const getInvoices = () => {
  return httpClient.get('/invoices');
};
