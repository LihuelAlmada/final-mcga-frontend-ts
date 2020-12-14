import './styleform.css';
import React, { useState} from 'react';
import { Formik, Form, Field } from "formik";
import {INoteReduxProps, ITarget, INoteAdd, INote } from '../../../interfaces';
import {addNote} from '../../../store/note/actions';
import { connect } from 'react-redux'

const NoteForm = ({addNote }: INoteAdd) => {
 
  const [title, setTitle] = useState<string>('');
  const [description,setDescription] = useState<string>('');
  //const [updatedAt, setDate] = useState(Date);

  const handleChangeTitle = (e: ITarget) => setTitle(e.target.value);
  const handleChangeDescription = (e: ITarget) => setDescription(e.target.value);

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
    <div className='note-form'>
        <Formik
          initialValues={{ title: "", description: "", updateupdatedAt: "" }}
          onSubmit={(initialValues: any) => { console.log("formik");
        }}
      >
        <Form onSubmit={handleOnSubmit}>
          <div className="containerAddNote">
            <h4> Add Notes</h4>
            <Field
              type="text"
              className="titleNote"
              name="title"
              placeholder="Title"
              onChange={handleChangeTitle}
            />
            <Field
              type="text"
              className="descriptionNote"
              name="description"
              placeholder="Description"
              onChange={handleChangeDescription}
            />
            <button className="btnAddNote" type="submit" >
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
};

const mapStateToProps = (state: INoteReduxProps) => ({
  note: state.note,
});

export default connect(mapStateToProps, { addNote })(NoteForm);