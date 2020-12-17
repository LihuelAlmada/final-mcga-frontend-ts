import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,
    REGISTER_SUCCESS,REGISTER_FAIL} from './types';
import axios from 'axios';
import { returnErrors } from '../error/action';
import { IAuthFunction, IConfigHeaders } from '../../interfaces';

export const loadUser = () => (dispatch: Function, getState: Function) => {
    //User Loading
    dispatch({ type: USER_LOADING});
    axios.get('http://localhost:5000/signin', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};
// Register User
export const register = ({ userName, email, password }: IAuthFunction) => (
    dispatch: Function
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // Request body
    const body = JSON.stringify({ userName, email, password });
    axios
      .post('http://localhost:5000/signup', body, config)
      .then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        dispatch({
          type: REGISTER_FAIL
        });
      });
  };
// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
// Login User
export const login = ({ userName,email, password }: IAuthFunction) => (
  dispatch: Function
) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ userName, email, password });

  axios
    .post('http://localhost:5000/signin', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
export const tokenConfig = (getState: Function) =>{
    // Get token from localstorage
    const token = getState().user.token;

    //Headers
    const config: IConfigHeaders = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //If token, add to headers
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
}