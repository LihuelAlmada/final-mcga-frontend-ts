export interface Note {
    user: string
    message: string
    timestamp: number
  }
  
export interface NoteState {
    notes: Note[]
}

export const SEND_NOTE = 'send_note'
export const DELETE_NOTE = 'delete_note'

interface SendNoteAction {
  type: typeof SEND_NOTE
  payload: Note
}

interface DeleteNoteAction {
  type: typeof DELETE_NOTE
  meta: {
    timestamp: number
  }
}


export type NoteActionTypes = SendNoteAction | DeleteNoteAction

