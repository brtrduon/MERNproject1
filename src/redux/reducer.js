import { RESERVE, GET_RESERVATION, DELETE_RESERVATION } from './types';

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

    case DELETE_RESERVATION:
      return {
        ...state
      }

    default:
      return state
  }
};