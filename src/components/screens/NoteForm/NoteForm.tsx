import './style.css';
import React from 'react';
import {INoteReduxProps, INoteAdd } from '../../../interfaces';
import {addNote} from '../../../store/note/actions';
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form';
//import {Link} from 'react-router-dom'
const NoteForm = ({addNote }: INoteAdd) => {
    const onSubmit =(e: any) => {
        const title = e.title
        const description = e.description
        const newNote = {
            title: title,
            description: description
        };
        console.log("paso a newNote")
        addNote(newNote);
        //<Link to="/login"/>
    }
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
