import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Home';

const appendComponent = (componentName, component) => {
  const reactElContainer = document.getElementById(componentName)
  removeComponent(reactElContainer)
  reactElContainer.appendChild(component);
}

const removeComponent = (component) => {
  if (component.children.length > 0) {
    component.removeChild(component.children[0]);
  }
}

const About = () => {
  const component = document.createElement('micro-front-about');
  appendComponent('react-container',component)
  return <div></div>
}

const Main = () => {
  const component = document.createElement('div');
  appendComponent('react-container',component)
  return <Home />
}

export function AppSwitch() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  )
}