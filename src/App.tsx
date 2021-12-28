import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';

import useCachedResources from 'hooks/useCachedResources';
import MainNavigator from 'screens/main/MainNavigator';

const queryClient = new QueryClient();

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    );
  }
};

export default App;
