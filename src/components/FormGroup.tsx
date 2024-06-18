import {Text, makeStyles} from '@rneui/themed';
import React from 'react';
import {View, ViewStyle} from 'react-native';

interface FormGroupProps extends ViewStyle {
  children: React.ReactElement;
  label: string;
}

const FormGroup = ({children, label, ...viewStyles}: FormGroupProps) => {
  const styles = useStyles();

  return (
    <View style={{...styles.container, ...viewStyles}}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 16,
    marginBottom: 7,
    fontWeight: '600',
  },
}));

export default FormGroup;
