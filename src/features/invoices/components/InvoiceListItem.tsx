import {Invoice} from '@/common/models/Invoice';
import {formatPrice} from '@/lib/utils/formatPrice';
import {Button, makeStyles} from '@rneui/themed';
import {Text} from '@rneui/themed';
import {format} from 'date-fns';
import React from 'react';
import {View} from 'react-native';
import InvoiceStatus, {InvoiceStatusProps} from './InvoiceStatus';
import {useNavigation, useRouter} from 'expo-router';

interface InvoiceListItemProps {
  invoice: Invoice;
}

const InvoiceListItem = ({invoice}: InvoiceListItemProps) => {
  const styles = useStyles();
  const router = useRouter();

  const handleViewMore = () => {
    router.push(`/invoices/${invoice.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>#{invoice.id}</Text>
        <Text>{invoice.billFromName}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.due}>Due {format(new Date(invoice.dueDate), 'dd/MM/yyyy')}</Text>
          <Text style={styles.amount}>{formatPrice(invoice.amount)}</Text>
        </View>
        <View>
          <InvoiceStatus status={invoice.status as InvoiceStatusProps['status']} />
        </View>
      </View>
      <View style={styles.actionContainer}>
        <Button onPress={handleViewMore}>View more</Button>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    marginBottom: 10,
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  due: {
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 4,
  },
  amount: {
    fontWeight: '600',
    fontSize: 18,
  },
  actionContainer: {
    marginTop: 15,
  },
}));

export default InvoiceListItem;
