import { Note, SEND_NOTE, DELETE_NOTE, NoteActionTypes } from './types'

export function sendNote(newNote: Note): NoteActionTypes {
  return {
    type: SEND_NOTE,
    payload: newNote
  }
}

export function deleteNote(timestamp: number): NoteActionTypes {
  return {
    type: DELETE_NOTE,
    meta: {
      timestamp
    }
  }
}