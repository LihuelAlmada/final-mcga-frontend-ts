import {combineReducers} from 'redux';
//import userReducer from './user/reducers';
import noteReducer from './note/reducers';

export default combineReducers({note: noteReducer});
//export default combineReducers({user: userReducer, note: noteReducer});