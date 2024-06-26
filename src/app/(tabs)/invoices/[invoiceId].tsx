import {useDeleteInvoice} from '@/features/invoices/hooks/useDeleteInvoice';
import {useMarkInvoiceAsPaid} from '@/features/invoices/hooks/useMarkInvoiceAsPaid';
import {getInvoiceById} from '@/lib/api/invoices';
import {formatPrice} from '@/lib/utils/formatPrice';
import {isOverdue} from '@/lib/utils/isOverdue';
import {Button, Text, makeStyles} from '@rneui/themed';
import {useQuery} from '@tanstack/react-query';
import {format, parseISO} from 'date-fns';
import {useLocalSearchParams, useRouter} from 'expo-router';
import React from 'react';
import {View} from 'react-native';

const InvoiceDetails = () => {
  const {invoiceId} = useLocalSearchParams();
  const {data} = useQuery({
    queryFn: () => getInvoiceById(invoiceId as string),
    queryKey: ['invoice', invoiceId],
  });
  const styles = useStyles();
  const router = useRouter();
  const invoice = data?.data;

  const markAsPaidMutation = useMarkInvoiceAsPaid();
  const deleteInvoiceMutation = useDeleteInvoice();

  const formatDate = (isoDate: string) => {
    const parsedDate = parseISO(isoDate);
    return format(parsedDate, 'dd/MM/yyyy');
  };

  const handleMarkAsPaid = () => {
    if (!invoice?.id) return;

    markAsPaidMutation.mutate(invoice.id);
  };

  const handleDelete = () => {
    if (!invoice?.id) return;

    deleteInvoiceMutation.mutate(invoice.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Button type="clear" onPress={() => router.back()} buttonStyle={{paddingHorizontal: 20, paddingVertical: 10}}>
          {'<'}
        </Button>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>#{invoice?.id}</Text>
        <Text style={styles.headingText}>{formatPrice(invoice?.amount ?? 0)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsHeading}>Invoice for:</Text>
        <Text style={styles.detailsText}>{invoice?.billToName}</Text>
        <Text style={styles.detailsText}>{invoice?.billToEmail}</Text>
        <Text style={styles.detailsText}>{invoice?.billToAddress}</Text>
        <Text style={styles.detailsText}>{invoice?.billToCountry}</Text>
        {invoice?.dueDate && <Text style={styles.detailsText}>Due {formatDate(invoice?.dueDate)}</Text>}
      </View>
      <View style={styles.action}>
        {invoice?.status === 'Pending' && (
          <Button onPress={handleMarkAsPaid} disabled={markAsPaidMutation.isPending}>
            {markAsPaidMutation.isPending ? 'Updating...' : 'Mark as paid'}
          </Button>
        )}
        {isOverdue(invoice?.dueDate ?? '') && invoice?.status === 'Pending' && (
          <Text style={styles.dueText}>This invoice is overdue</Text>
        )}
      </View>
      <View style={styles.delete}>
        <Button onPress={handleDelete} buttonStyle={styles.deleteBtn} disabled={deleteInvoiceMutation.isPending}>
          {deleteInvoiceMutation.isPending ? 'Deleting...' : 'Delete'}
        </Button>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headingText: {
    fontSize: 16,
    fontWeight: '500',
  },
  detailsHeading: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 15,
  },
  details: {
    marginTop: 35,
    width: '100%',
    textAlign: 'left',
  },
  detailsText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 7,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  dueText: {
    fontSize: 14,
    color: theme.colors.violetAccent,
  },
  delete: {
    marginTop: 30,
    width: '100%',
  },
  deleteBtn: {
    backgroundColor: theme.colors.error,
  },
  back: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
}));

export default InvoiceDetails;
