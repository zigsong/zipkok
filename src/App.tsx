import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';

import useCachedResources from 'hooks/useCachedResources';
import AuthProvider from 'contexts/auth/AuthProvider';
import useAuth from 'contexts/auth/useAuth';
import MainNavigator from 'screens/main/MainNavigator';
import AuthNavigator from 'screens/auth/AuthNavigator';

const queryClient = new QueryClient();

const Stack = createStackNavigator();

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer>
              <AppStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </AuthProvider>
      </QueryClientProvider>
    );
  }
};

const AppStack = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default App;
