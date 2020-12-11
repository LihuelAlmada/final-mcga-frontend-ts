/*
import React from 'react';

const NoteList = () => {
    return(
        <div className='list'>
            Notes List
        </div>
    )
}

export default NoteList;*/
import './stylelist.css';
import NoteForm from '../NoteForm/NoteForm';
import React, { useEffect, useState } from 'react';

//export interface noteProps { }

export interface note {
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const NoteList: React.FC<note> = () => {
    const [notes, setnoteList] = useState<note[]>([]);
    const getnotes = async () => {
        let e = await fetch('https://altas-notas-ts.herokuapp.com/notes')
        let notes = await e.json();
        setnoteList(notes)
    }
    useEffect(() => { getnotes(); }, [])
    return (
        <React.Fragment>
            <div className="list">
                <div className="notes">
                    {notes.map(note => 
                        <NoteForm
                        key={note._id}/>
                    )}
                </div>
            </div>
        </React.Fragment >
    );
}
/*
{notes.map(note => (
                        <>
                            <div className="note">
                                {<img src={note.image} alt="imagen"></img>}
                                <h1>{note.name}</h1>
                                <h3>Genre:  {note.genre}</h3>
                                <h3>Description: {note.description}</h3>
                            </div>
                        </>
                    ))}
*/

export default NoteList;