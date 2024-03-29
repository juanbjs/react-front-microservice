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

const Page1 = () => {
  const component = document.createElement('micro-front-page1');
  appendComponent('react-container',component)
  return <div></div>
}

const Page2 = () => {
  const component = document.createElement('micro-front-page2');
  appendComponent('react-container',component)
  return <div></div>
}

const Page3 = () => {
  const component = document.createElement('micro-front-page3');
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
      <Route exact path="/page1">
        <Page1 />
      </Route>
      <Route exact path="/page2">
        <Page2 />
      </Route>
      <Route exact path="/page3">
        <Page3 />
      </Route>
    </Switch>
  )
}