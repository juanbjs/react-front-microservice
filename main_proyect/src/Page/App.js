import React from 'react';
import { StoreProvider } from '../Provider/Store';
import { Main } from './index';

export default function App() {
  return (
    <React.Fragment>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </React.Fragment>
  );
}