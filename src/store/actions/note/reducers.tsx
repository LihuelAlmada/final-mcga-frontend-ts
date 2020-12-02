import {
    NoteState,
    SEND_NOTE,
    NoteActionTypes,
    DELETE_NOTE
  } from './types'
  
  const initialState: NoteState = {
    notes: []
  }
  
  export function noteReducer(
    state = initialState,
    action: NoteActionTypes
  ): NoteState {
    switch (action.type) {
      case SEND_NOTE:
        return {
          notes: [...state.notes, action.payload]
        }
      case DELETE_NOTE:
        return {
          notes: state.notes.filter(
            note => note.timestamp !== action.meta.timestamp
          )
        }
      default:
        return state
    }
  }