import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppHeader, AppSwitch } from '../../Page';

export function Main() {
  return (
    <Router>
      <AppHeader />
      <AppSwitch />
    </Router>
  )
}