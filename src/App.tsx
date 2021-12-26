import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';

import useCachedResources from 'hooks/useCachedResources';
import MainNavigator from 'screens/main/MainNavigator';
import theme from 'styles/theme';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
};

export default App;
