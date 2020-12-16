import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,
    REGISTER_SUCCESS,REGISTER_FAIL} from './types';
import axios from 'axios';
import { returnErrors } from '../error/action';
import { IAuthFunction, IConfigHeaders } from '../../interfaces';

export const loadUser = () => (dispatch: Function, getState: Function) => {
    //User Loading
    dispatch({ type: USER_LOADING});
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
        config.headers['x-auth-token'] = token;
    }
    axios.get('/signin', config)
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
}

/*export const tokenConfig = (getState: Function) =>{
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
        config.headers['x-auth-token'] = token;
    }
}*/