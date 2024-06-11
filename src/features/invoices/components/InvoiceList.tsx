import {getInvoices} from '@/lib/api/invoices';
import {Text} from '@rneui/themed';
import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {FlatList, View} from 'react-native';
import InvoiceListItem from './InvoiceListItem';
import {makeStyles} from '@rneui/base';

const InvoiceList = () => {
  const {data, isLoading, isError} = useQuery({
    queryFn: getInvoices,
    queryKey: ['invoices'],
    staleTime: 1000 * 60 * 1,
  });
  const styles = useStyles();

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
      <FlatList
        data={data?.data ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <InvoiceListItem invoice={item.item} />}
      />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20,
  },
}));

export default InvoiceList;
