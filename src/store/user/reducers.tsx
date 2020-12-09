import { User, UserActionTypes, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNIN_REQUEST, SIGNIN_SUCCESS} from './types'

const initialState: User = {
  loggedIn: false,
  userName: ''
}

export function userReducer(
  state = initialState,
  action: UserActionTypes
): User {
  switch (action.type) {
    case SIGNIN_REQUEST: {
        return {
            ...state,
            ...action.payload           
        }
    };
    case SIGNIN_SUCCESS: {
        return {
            ...state,
            ...action.payload
        }
    };
    case SIGNUP_REQUEST: {
        return {
            ...state,
            ...action.payload
        }
    };
    case SIGNUP_SUCCESS: {
        return {
            ...state,
            ...action.payload
        }
    }
    default:
      return state
  }
}