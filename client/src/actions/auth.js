import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

//Register a user
export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {


    const errors = err.response.data.errors;
    //NOT WORKING YET...........
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.message, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }

}
