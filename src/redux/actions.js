import { RESERVE, GET_RESERVATION } from './types';

export const reserve = formValues => async dispatch => {
  try {
    const reserveData = JSON.parse(localStorage.getItem('kitchenReservation'));

    if (!reserveData) {
      localStorage.setItem('kitchenReservation', JSON.stringify(formValues));
      await
      dispatch({
        type: RESERVE,
        payload: reserveData
      })
    } else {
      dispatch({
        type: RESERVE,
        payload: 'Reservation already placed'
      })
    }

  } catch (error) {
    console.log(error)
  }
}

export const getReservations = () => async dispatch => {
  try {
    const reserveData = JSON.parse(localStorage.getItem('kitchenReservation'));

    await
    dispatch({
      type: GET_RESERVATION,
      payload: reserveData
    })
  } catch (error) {
    console.log(error)
  }
}