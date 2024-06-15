import {deleteInvoice} from '@/lib/api/invoices';
import {toast} from '@/lib/utils/toast';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'expo-router';

export const useDeleteInvoice = () => {
  const router = useRouter();
  const client = useQueryClient();

  return useMutation({
    mutationFn: deleteInvoice,
    onSuccess: () => {
      toast({
        type: 'success',
        text1: 'Invoice deleted',
      });
      client.invalidateQueries({
        queryKey: ['invoices'],
      });
      router.push('/invoices');
    },
    onError: () => {
      toast({
        type: 'error',
        text1: 'Failed to delete Invoice',
        text2: 'There was an unexpected error. ',
      });
    },
  });
};
