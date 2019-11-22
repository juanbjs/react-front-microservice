import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MicroFrontEnd } from '../../MicroFrontEnd';

const Home = () => <div>HOME</div>

const About = ({ history }) => (
  <MicroFrontEnd 
    history={history} 
    path = "/about"
  />
);

export function AppSwitch() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  )
}