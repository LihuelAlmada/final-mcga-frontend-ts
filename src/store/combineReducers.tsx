import {combineReducers} from 'redux';
import userReducer from './user/reducers';
import noteReducer from './note/reducers';
import errorReducer from './error/reducers';

export default combineReducers({user: userReducer, note: noteReducer, error: errorReducer});