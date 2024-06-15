import {markInvoiceAsPaid} from '@/lib/api/invoices';
import {toast} from '@/lib/utils/toast';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'expo-router';

export const useMarkInvoiceAsPaid = () => {
  const router = useRouter();
  const client = useQueryClient();

  return useMutation({
    mutationFn: markInvoiceAsPaid,
    onSuccess: (resp) => {
      toast({
        type: 'success',
        text1: 'Invoice updated',
        text2: 'Invoice marked as paid',
      });
      client.invalidateQueries({
        queryKey: ['invoices'],
      });
      client.invalidateQueries({
        queryKey: ['invoice', String(resp.data.id)],
      });
      router.push('/invoices');
    },
    onError: () => {
      toast({
        type: 'error',
        text1: 'Failed to update invoice',
        text2: 'There was an unexpected error',
      });
    },
  });
};
