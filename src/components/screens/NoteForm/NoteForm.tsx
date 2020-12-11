import './styleform.css';
import React from 'react';

export interface note {
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const NoteForm = () => {
    return(
        <div className='note-form'>
            
            <h1>Notes Form</h1>
            <h3>holis</h3>
        </div>
    )
}

export default NoteForm;
