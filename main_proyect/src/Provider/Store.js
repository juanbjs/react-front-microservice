import React, { useContext } from 'react';
import { reducer } from '../Reducer';

export const StateContext = React.createContext();

const initialState = {
  session: {},
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>;
}

export const useStateValue = () => useContext(StateContext);