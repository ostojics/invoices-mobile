import {deleteInvoice} from '@/lib/api/invoices';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'expo-router';

export const useDeleteInvoice = () => {
  const router = useRouter();
  const client = useQueryClient();

  return useMutation({
    mutationFn: deleteInvoice,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ['invoices'],
      });
      router.push('/invoices');
    },
    onError: () => {
      // TODO - error toast
    },
  });
};
