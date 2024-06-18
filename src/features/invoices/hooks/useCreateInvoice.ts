import {CreateInvoiceDto, CreateInvoiceFormData} from '@/common/dto/CreateInvoiceDTO';
import {User} from '@/common/models/User';
import {createInvoice} from '@/lib/api/invoices';
import {toast} from '@/lib/utils/toast';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'expo-router';
import {UseFormReset} from 'react-hook-form';

interface UseCreateInvoiceProps {
  reset: UseFormReset<CreateInvoiceFormData>;
}

export const useCreateInvoice = ({reset}: UseCreateInvoiceProps) => {
  const router = useRouter();
  const client = useQueryClient();

  return useMutation({
    mutationFn: ({formData, userData}: {formData: CreateInvoiceFormData; userData: User}) => {
      const dto: CreateInvoiceDto = {
        billFromEmail: userData.email,
        billFromCity: formData.city,
        billFromAddress: formData.address,
        billFromCountry: formData.country,
        billToName: formData.name,
        billToCity: formData.city,
        billToAddress: formData.address,
        billToCountry: formData.country,
        billToEmail: formData.email,
        dueDate: formData.dueDate,
        description: formData.description,
        amount: Number(formData.amount),
        billFromName: formData.name,
      };

      return createInvoice(dto);
    },
    onSuccess: () => {
      toast({
        type: 'success',
        text1: 'Invoice created',
      });
      reset();
      client.invalidateQueries({
        queryKey: ['invoices'],
      });
      router.push('/invoices');
    },
    onError: () => {
      toast({
        type: 'error',
        text1: 'Failed to create Invoice',
      });
    },
  });
};
