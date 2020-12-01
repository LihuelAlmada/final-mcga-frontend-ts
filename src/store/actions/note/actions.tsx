import { Note, SEND_NOTE, NoteActionTypes } from './types'

export function sendNote(newNote: Note): NoteActionTypes {
  return {
    type: SEND_NOTE,
    payload: newNote
  }
}
