import {getInvoices} from '@/lib/api/invoices';
import {Text, makeStyles} from '@rneui/themed';
import {useQuery} from '@tanstack/react-query';
import {Link} from 'expo-router';
import React from 'react';
import {FlatList, View} from 'react-native';
import InvoiceListItem from './InvoiceListItem';

const InvoiceList = () => {
  const {data, isLoading, isError} = useQuery({
    queryFn: getInvoices,
    queryKey: ['invoices'],
    staleTime: 1000 * 60,
  });
  const styles = useStyles();
  const isEmpty = data?.data?.length === 0;

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Failed to get invoices</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isEmpty && (
        <View style={styles.zeroStateContainer}>
          <Text>No invoices found</Text>
          <Link style={styles.zeroStateLink} href="/add-invoice">
            Create new invoice
          </Link>
        </View>
      )}
      {!isEmpty && <FlatList data={data?.data ?? []} renderItem={({item}) => <InvoiceListItem invoice={item} />} />}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20,
  },
  zeroStateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
  zeroStateLink: {
    marginTop: 10,
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.tertiary,
    padding: 10,
    borderRadius: 8,
  },
}));

export default InvoiceList;
