import {Text, makeStyles} from '@rneui/themed';
import React from 'react';

interface FormError {
  errorMsg: string;
}
const FormError = ({errorMsg}: FormError) => {
  const styles = useStyles();

  return <Text style={styles.message}>{errorMsg}</Text>;
};

const useStyles = makeStyles((theme) => ({
  message: {
    color: theme.colors.error,
    fontSize: 12,
    marginTop: 5,
  },
}));

export default FormError;
