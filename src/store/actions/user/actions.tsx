import { UserActionTypes, User, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNIN_REQUEST, SIGNIN_SUCCESS } from './types'

export function signUpRequest(newUser: User): UserActionTypes {
  return {
    type: SIGNUP_REQUEST,
    payload: newUser
  }
}
export function signUpSuccess(newUser: User): UserActionTypes {
  return {
    type: SIGNUP_SUCCESS,
    payload: newUser
  }
}
export function signInRequest(newUser: User): UserActionTypes {
  return {
    type: SIGNIN_REQUEST,
    payload: newUser
  }
}
export function signInSuccess(newUser: User): UserActionTypes {
  return {
    type: SIGNIN_SUCCESS,
    payload: newUser
  }
}