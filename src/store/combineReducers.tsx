import {combineReducers} from 'redux';
import { userReducer} from './user/reducers';
import { noteReducer} from './note/reducers';

export const reducer = combineReducers({user: userReducer, note: noteReducer});