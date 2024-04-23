import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes/index.routes';
import {AuthProvider} from './src/providers/authProvider';
import theme from './src/styles/theme';
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
