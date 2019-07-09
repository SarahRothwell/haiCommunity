import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {

//randomly generate alert id from uuid
  const id = uuid.v4();

//dispatch set alert to the reducer
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id}
  });

//remove alert after 4sec
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);

};
