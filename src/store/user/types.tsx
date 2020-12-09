export interface User {
    loggedIn: boolean
    userName: string
}
export const SIGNUP_REQUEST = 'signup_request';
export const SIGNUP_SUCCESS = 'signup_success';
export const SIGNIN_REQUEST = 'signin_request';
export const SIGNIN_SUCCESS = 'signin_success';
//This const are condition the actions to reducers, this send since components

interface signUpRequest {
    type: typeof SIGNUP_REQUEST
    payload: User
}

interface signUpSuccess {
    type: typeof SIGNUP_SUCCESS
    payload: User
}

interface signInRequest {
    type: typeof SIGNIN_REQUEST
    payload: User
}

interface signInSuccess {
    type: typeof SIGNIN_SUCCESS
    payload: User
}

export type UserActionTypes = signUpRequest | signUpSuccess | signInRequest | signInSuccess