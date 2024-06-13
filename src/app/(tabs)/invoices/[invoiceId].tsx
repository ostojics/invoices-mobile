import {getInvoiceById} from '@/lib/api/invoices';
import {Text} from '@rneui/themed';
import {useQuery} from '@tanstack/react-query';
import {useLocalSearchParams} from 'expo-router';
import React from 'react';
import {View} from 'react-native';

const InvoiceDetails = () => {
  const {invoiceId} = useLocalSearchParams();
  const {data} = useQuery({
    queryFn: () => getInvoiceById(invoiceId as string),
    queryKey: ['invoice', invoiceId],
  });

  return (
    <View>
      <Text>Invoice details</Text>
    </View>
  );
};

export default InvoiceDetails;
