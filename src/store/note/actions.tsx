import axios from 'axios';
import { GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING } from './types';
import { INote } from '../../interfaces';
import {tokenConfig} from '../user/actions';
import { returnErrors } from '../error/action'


export const getNotes = () => (dispatch: Function) => {
  //para los metodos que necesite mandar el Token, leerlo aca
  dispatch(setNotesLoading());
   axios //return
    .get('http://localhost:5000/notes') //https://altas-notas-ts.herokuapp.com/notes
    .then(res =>
      dispatch({
        type: GET_NOTES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
//fetch, todas las llamadas que requieran setear un header, tengo que ver como hacer un post, para el 3er parametro config, que es un json, header: '' Mirar doc axios
export const addNote = (note: INote) => (
  dispatch: Function,
  getState: Function
) => {
  axios
    .post('http://localhost:5000/notes', note, tokenConfig(getState)) //http://localhost:5000/notes
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
    .delete(`http://localhost:5000/notes/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_NOTE,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setNotesLoading = () => {
  return {
    type: NOTES_LOADING
  };
};
