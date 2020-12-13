            /*Notes*/

export interface IExistingNote {
    _id: string;
    name: string;
    description: string;
}

export interface INote {
    _id?: string;
    name: string;
    description: string;
}

export interface INoteModal {
    isAuthenticated: boolean;
    addNote(note: INote): void;
}

export interface INotesList {
    note: {
        notes: IExistingNote[];
    };
    getNotes(): void;
    deleteNote(id: string): void;
    isAuthenticated: boolean;
}

            /*Actions*/ 

export interface IAction {
    type: string;
    payload?: any;
}