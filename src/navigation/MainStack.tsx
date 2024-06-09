import { useTheme } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";

const MainStack = () => {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.primary },
        statusBarColor: theme.colors.secondary,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default MainStack;
