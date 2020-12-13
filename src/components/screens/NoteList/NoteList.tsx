import './stylelist.css';
import NoteForm from '../NoteForm/NoteForm';
import React, { useEffect, useState } from 'react';
import AppNavbar from '../../AppNavBar';
import { Formik, Form, Field } from "formik";
import {getNotes, deleteNote} from '../../../store/note/actions'

export interface note {
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
const handleDelete = (id: string) => {
  deleteNote(id);
};
const NoteList: React.FC<note> = () => {
    const [notes, setNoteList] = useState<note[]>([]);
    const getNotes = async () => {
        let e = await fetch('https://altas-notas-ts.herokuapp.com/notes')
        let notes = await e.json();
        setNoteList(notes)
    }
    useEffect(() => { getNotes(); }, [])
    return (
        <React.Fragment>
            <AppNavbar />
            <Formik
            initialValues={{ name: "", lastname: "", age: "" }}
            onSubmit={(values: any) => {
              //Call action "postNote"
              //this.props.postNote(values);
              //this.setState((prevState) => ({ check: !prevState.check }));
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="containerAddNote">
                  <h4> Add Notes</h4>
                  <Field
                    type="text"
                    className="nameNote"
                    name="name"
                    placeholder="Name"
                  />

                  <Field
                    type="text"
                    className="lastnameNote"
                    name="lastname"
                    placeholder="Last name"
                  />
                  <Field
                    type="text"
                    className="ageNote"
                    name="age"
                    placeholder="Age"
                  />
                  <Field
                    type="text"
                    className="classNote"
                    name="class"
                    placeholder="Class"
                  />
                  <button className="btnAddNote" type="submit">
                    Add
                  </button>
                  
                </div>
              </Form>
            )}
          </Formik>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>key</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) =>{
                return (
                  <tr>
                    <td>
                      <button
                        className="deleteNote"
                        onClick={() => 
                          //Call action "deleteNote"
                          handleDelete(note._id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                    <td>Title: {note.title}</td>
                    <td>Description: {note.description}</td>
                    <td>Date: {note.updatedAt}</td>
                    <td>key: {note._id}</td>
                  </tr>
                );
              })}
          </tbody>
        </React.Fragment >
    );
}

export default NoteList;