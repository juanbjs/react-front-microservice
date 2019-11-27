import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
//import htmlToReact from 'html-to-react';

import { Main } from './Page';

class ReactElement extends HTMLElement {
  
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    render(<Main />, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

}

customElements.define('micro-front-about', ReactElement);