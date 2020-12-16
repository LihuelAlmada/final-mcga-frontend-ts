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
        /* Error */
export interface IMsg {  
    msg: string | any;
}
export enum E_ERROR {
    LOGIN_FAIL = 'LOGIN_FAIL',
    REGISTER_FAIL = 'REGISTER_FAIL'
}
export interface IError { 
    id: E_ERROR;
    msg: IMsg;
}
        /* Authentication and User */
export interface IConfigHeaders {  
    headers: {
      [index: string]: string;
    };
}
export interface IAuthReduxProps {  
    auth: { isAuthenticated: boolean };
    error: IError;
}
export interface IUser {  
    userName: string;
    email?: string;
    password: string;
}
export interface IAuthForm { 
    isAuthenticated?: boolean;
    error: IError;
    clearErrors(): void;
}
export interface ISignIn extends IAuthForm {  
    login(user: IUser): void;
}
export interface ISignUp extends IAuthForm {   
    register(user: IUser): void;
}
export interface ILogoutProps { 
    logout(): void;
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
export interface IAuthFunction { 
    userName: string;
    email?: string;
    password: string;
}