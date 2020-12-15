import './styleform.css';
import React, { useState} from 'react';
import {INoteReduxProps, ITarget, INoteAdd } from '../../../interfaces';
import {addNote} from '../../../store/note/actions';
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form';

const NoteForm = ({addNote }: INoteAdd) => {

    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleChangeTitle = (e: ITarget) =>{setTitle(e.target.value)} 

    const handleChangeDescription = (e: ITarget) => setDescription(e.target.value);
    /*onChange = e =>{
        this.setStage({ [e.target.name]: e.target.value})
    }*/
    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        const newNote = {
            title,
            description
        };
        console.log("paso a newNote")
        addNote(newNote);
    };
    return(
        <Form
            initialValues={{ title: "", description: "" }}
            onSubmit={(initialValues: string) => { console.log("formik");}}
            render={() => (
                <form onSubmit={handleOnSubmit}>
                    <h2>Simple Default Input</h2>
                    <div>
                        <label>Title</label>
                        <Field name="title" component="input" placeholder={title} onChange={handleChangeTitle} />
                    </div>
                    <div>
                        <label>Description</label>
                        <Field name="description" component="input" placeholder={description} onChange={handleChangeDescription} />
                    </div>
                    <button type="submit">Add</button>
                </form>
            )}
        />
    )
};

const mapStateToProps = (state: INoteReduxProps) => ({
    note: state.note
});

export default connect(mapStateToProps, { addNote })(NoteForm);
