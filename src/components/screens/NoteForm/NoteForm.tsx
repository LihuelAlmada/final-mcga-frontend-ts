import './styleform.css';
import React, { useState} from 'react';
//import { Formik, Form, Field } from "formik";
import {INoteReduxProps, ITarget, INoteAdd, INote } from '../../../interfaces';
import {addNote} from '../../../store/note/actions';
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form';

const NoteForm = ({addNote }: INoteAdd) => {
 
  const [title, setTitle] = useState('');
  const [description,setDescription] = useState('');
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
    <Form
    initialValues={{ title: "", description: "" }}
          onSubmit={(initialValues: any) => { console.log("formik");
      }}
    render={() => (
      <form onSubmit={handleOnSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>Title</label>
          <Field name="title" component="input" placeholder="title" onChange={handleChangeTitle}/>
        </div>
        <div>
          <label>Description</label>
          <Field name="description" component="input" placeholder="Description" onChange={handleChangeDescription}/>
        </div>
        <button type="submit">Add</button>
      </form>
    )}
  />
  )
};

const mapStateToProps = (state: INoteReduxProps) => ({
  note: state.note,
});

export default connect(mapStateToProps, { addNote })(NoteForm);

/* <Formik
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
      </Formik>*/