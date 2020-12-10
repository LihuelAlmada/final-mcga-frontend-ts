import {combineReducers} from 'redux';
import { userReducer} from './user/reducers';
import { noteReducer} from './note/reducers';
import { reducer as formReducer } from 'redux-form';

export const reducer = combineReducers({user: userReducer, note: noteReducer, form: formReducer});