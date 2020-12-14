            /*Notes*/

export interface IExistingNote {
    _id: string;
    title: string;
    description: string;
}

export interface INote {
    _id?: string;
    title: string;
    description: string;
}

export interface INotesList {
    note: {
        notes: IExistingNote[];
    };
    getNotes(): void;
    deleteNote(id: string): void;
    //isAuthenticated: boolean;
}
export interface INoteReduxProps {     
    note: {
      notes: IExistingNote[];
    };
}
export interface INoteAdd { 
    //isAuthenticated: boolean;
    addNote(note: INote): void;
}

            /*React*/
export interface ITarget {   
    target: {
        value: React.SetStateAction<string>;
    };
    preventDefault(): void;
}
            /*Actions*/ 

export interface IAction {
    type: string;
    payload?: any;
}