import { SESSIONSTORE } from '../Action/Action-Types'

export function reducer(state, action) {
  switch (action.type) {
    case SESSIONSTORE:
      return { 
        ...state, 
        session: action.payload,
      };
    default:
      return state;
  }
}