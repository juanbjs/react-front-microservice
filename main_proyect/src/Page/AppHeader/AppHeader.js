import React from "react";
import { NavLink } from 'react-router-dom';

export function AppHeader() {
  return (
    <header>
      <div className="center-column">
        <h1>Feed me</h1>
      </div>
      <nav>
        <ol className="center-column">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ol>
      </nav>
    </header>
  )
}