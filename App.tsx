import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes/index.routes';
import theme from './src/styles/theme';
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
