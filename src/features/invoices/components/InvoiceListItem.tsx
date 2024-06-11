import {Invoice} from '@/common/models/Invoice';
import {formatPrice} from '@/lib/utils/formatPrice';
import {makeStyles} from '@rneui/themed';
import {Text} from '@rneui/themed';
import {format} from 'date-fns';
import React from 'react';
import {View} from 'react-native';

interface InvoiceListItemProps {
  invoice: Invoice;
}

const InvoiceListItem = ({invoice}: InvoiceListItemProps) => {
  const styles = useStyles();

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
          <Text>{invoice.status}</Text>
        </View>
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
}));

export default InvoiceListItem;
