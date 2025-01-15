import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from './src/providers/authProvider';
import { Routes } from './src/routes/index.routes';
import theme from './src/styles/theme';

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
