import {CreateInvoiceFormData, createInvoiceSchema} from '@/common/dto/CreateInvoiceDTO';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

export const useValidateCreateInvoice = () => {
  return useForm<CreateInvoiceFormData>({
    resolver: yupResolver(createInvoiceSchema),
    defaultValues: {
      name: '',
      city: '',
      country: '',
      email: '',
      description: '',
      address: '',
      amount: '0',
      dueDate: new Date().toISOString(),
    },
  });
};
