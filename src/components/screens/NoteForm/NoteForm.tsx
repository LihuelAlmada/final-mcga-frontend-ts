import './styleform.css';
import React, { useState} from 'react';
import {INoteReduxProps, ITarget, INoteAdd } from '../../../interfaces';
import {addNote} from '../../../store/note/actions';
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form';

const NoteForm = ({addNote }: INoteAdd) => {

    /*const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleChangeTitle = (e: ITarget) =>{setTitle(e.target.value)} 

    const handleChangeDescription = (e: ITarget) => setDescription(e.target.value);*/
    /*onChange = e =>{
        this.setStage({ [e.target.name]: e.target.value})
    }*/
    /*const handleOnSubmit = (e: any) => {
        e.preventDefault();
        const newNote = {
            title,
            description
        };
        console.log("paso a newNote")
        addNote(newNote);
    };*/
    const onSubmit =(e: any) => {
        //e.preventDefault();
        console.log("El E ", e.title)
        const title = e.title
        const description = e.description
        //console.log(title)
        const newNote = {
            title: title,
            description: description
        };
        console.log("paso a newNote")
        addNote(newNote);
        //console.log(newNote)
    }
    /*const handleSubmit =(e: any) => {
        e.preventDefault();
        console.log("El E ", e)
        /*const title = e.target('title').value
        const description = e.target('description').value
        const newNote = {
            title,
            description
        };
        //addNote(newNote);
    }*/
    
    return(
        <Form
            onSubmit={onSubmit}
            //initialValues={}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <h2 className="default">Simple Default Input</h2>
                    <div className="container">
                        <div>
                            <label>Title</label>
                            <Field name="title" component="input" placeholder="Title" />
                        </div>
                        <div>
                            <label>Description</label>
                            <Field name="description" component="input" placeholder="Description" />
                        </div>
                        <div>
                            <button className="add" type="submit">Add</button>
                        </div>
                    </div>
                </form>
            )}
        />
    )
};

const mapStateToProps = (state: INoteReduxProps) => ({
    note: state.note
});

export default connect(mapStateToProps, { addNote })(NoteForm);
