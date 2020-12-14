            /*Notes*/

export interface IExistingNote {
    _id: string;
    title: string;
    description: string;
    updatedAt: Date;
}

export interface INote {
    _id?: string;
    title: string;
    description: string;
    updatedAt: Date;
}

export interface INotesList {
    note: {
        notes: IExistingNote[];
    };
    getNotes(): void;
    deleteNote(id: string): void;
    isAuthenticated: boolean;
}
export interface INoteReduxProps {     
    note: {
      notes: IExistingNote[];
    };
  }

            /*Actions*/ 

export interface IAction {
    type: string;
    payload?: any;
}