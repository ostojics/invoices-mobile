import {Text, makeStyles} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';

export interface InvoiceStatusProps {
  status: 'Paid' | 'Pending';
}

const InvoiceStatus = ({status}: InvoiceStatusProps) => {
  const styles = useStyles({status});

  return (
    <View style={styles.container}>
      <Text>{status}</Text>
    </View>
  );
};

const useStyles = makeStyles((theme, props: {status: InvoiceStatusProps['status']}) => ({
  container: {
    backgroundColor: props.status === 'Paid' ? theme.colors.success : theme.colors.detail,
    padding: 10,
    borderRadius: 5,
  },
}));

export default InvoiceStatus;
