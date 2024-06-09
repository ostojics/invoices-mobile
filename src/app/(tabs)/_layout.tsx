import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {useTheme} from '@rneui/themed';

export default function TabLayout() {
  const {theme} = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
        },
      }}
      sceneContainerStyle={{backgroundColor: theme.colors.primary}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add-invoice"
        options={{
          title: 'Add invoice',
          tabBarIcon: ({color, focused}) => <TabBarIcon name={focused ? 'add' : 'add-outline'} color={color} />,
        }}
      />
    </Tabs>
  );
}
