import { GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING } from './types';
import {IAction, INote} from '../interfaces'
  
const initialState = {
  notes: [],
  loading: false
}
interface IState {
  notes: INote[];
}
export default function(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload)
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      };
    case NOTES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}