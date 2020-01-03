import { RESERVE, GET_RESERVATION } from './types';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case RESERVE:
      return {
        ...state,
        reserveData: action.payload
      }

    case GET_RESERVATION:
      return {
        ...state,
        reserveData: action.payload
      }

    default:
      return state
  }
};