import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes/index.routes';
import {AuthProvider} from './src/providers/authProvider';
import theme from './src/styles/theme';
import {ThemeProvider} from 'styled-components';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
      <Toast />
    </QueryClientProvider>
  );
}

export default App;
