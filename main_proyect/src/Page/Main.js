import React from 'react';

import { SecureApp } from '../Auth/Security'

export function Main() {
  return (
    <SecureApp>
      <div>
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
      </div>
    </SecureApp>
  );
}