import { SESSIONSTORE } from './Action-Types';

export const setSession = (dispatch, session) => {

  return dispatch({
    type: SESSIONSTORE,
    payload: session
  });
};