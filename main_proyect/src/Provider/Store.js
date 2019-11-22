import React, { useContext } from 'react';
import { reducer } from '../Reducer';

export const StateContext = React.createContext();

const initialState = {
  session: {},
  microPageURL: [
    {
      path: "/",
      url: "http://10.5.2.188:3001",
    },
    {
      path: "/about",
      url: "http://10.5.2.188:3002",
    }
  ]
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>;
}

export const useStateValue = () => useContext(StateContext);