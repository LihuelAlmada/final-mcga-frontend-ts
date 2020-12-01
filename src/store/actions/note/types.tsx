export interface Note {
    user: string
    message: string
    timestamp: number
  }
  
export interface NoteState {
    notes: Note[]
}

export const SEND_NOTE = 'send_note'

interface SendNoteAction {
  type: typeof SEND_NOTE
  payload: Note
}


export type NoteActionTypes = SendNoteAction 

