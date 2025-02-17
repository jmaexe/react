import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

const RootLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Screen name="Home" />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default RootLayout;
