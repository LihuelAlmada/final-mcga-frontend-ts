import axios from 'axios';
import { GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING } from './types';
import { INote } from '../interfaces';

export const getNotes = () => (dispatch: Function) => {
  dispatch(setNotesLoading());
  axios
    .get('/api/notes')
    .then(res =>
      dispatch({
        type: GET_NOTES,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const addNote = (note: INote) => (
  dispatch: Function,
  getState: Function
) => {
  axios
    .post('/api/notes', note)
    .then(res =>
      dispatch({
        type: ADD_NOTE,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const deleteNote = (id: string) => (
  dispatch: Function,
  getState: Function
) => {
  axios
    .delete(`/api/notes/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_NOTE,
        payload: id
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const setNotesLoading = () => {
  return {
    type: NOTES_LOADING
  };
};
