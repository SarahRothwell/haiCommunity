import axios from 'axios';
import { setAlert } from './alert';
import { SUPPORTS_ERROR, GET_SUPPORTS } from './types';

//Get supports

export const getSupports = () => async dispatch => {

    try {
      const res = await axios.get('/support');

      dispatch({
        type: GET_SUPPORTS,
        payload: res.data
      });

    } catch(err){
      dispatch({
        type: SUPPORTS_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status}
      });

    }
}
