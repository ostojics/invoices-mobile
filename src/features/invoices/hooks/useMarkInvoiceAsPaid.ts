import {markInvoiceAsPaid} from '@/lib/api/invoices';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'expo-router';

export const useMarkInvoiceAsPaid = () => {
  const router = useRouter();
  const client = useQueryClient();

  return useMutation({
    mutationFn: markInvoiceAsPaid,
    onSuccess: (resp) => {
      client.invalidateQueries({
        queryKey: ['invoices'],
      });
      client.invalidateQueries({
        queryKey: ['invoice', String(resp.data.id)],
      });
      router.push('/invoices');
    },
    onError: () => {
      // TODO - error toast
    },
  });
};
