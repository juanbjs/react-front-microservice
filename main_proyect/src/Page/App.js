import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { StoreProvider } from '../Provider/Store';
import { Main } from './index';

import theme from './theme';

export default function App() {
  return (
    <React.Fragment>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </StoreProvider>
    </React.Fragment>
  );
}