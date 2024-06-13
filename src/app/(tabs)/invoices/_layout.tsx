import {useTheme} from '@rneui/themed';
import {Stack} from 'expo-router';
import React from 'react';

const InvoicesLayout = () => {
  const {theme} = useTheme();

  return <Stack screenOptions={{headerShown: false, contentStyle: {backgroundColor: theme.colors.primary}}} />;
};

export default InvoicesLayout;
