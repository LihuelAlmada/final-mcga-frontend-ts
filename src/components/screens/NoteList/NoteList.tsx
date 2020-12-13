import './stylelist.css';
import NoteForm from '../NoteForm/NoteForm';
import React, { useEffect, useState } from 'react';
import AppNavbar from '../../AppNavBar';
import { Formik, Form, Field } from "formik";
import {deleteNote, sendNote} from '../../../store/note/actions'


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
            <AppNavbar />
            <Formik
            initialValues={{ name: "", lastname: "", age: "" }}
            onSubmit={(values: any) => {
              //Call action "postStudent"
              //this.props.postStudent(values);
              //this.setState((prevState) => ({ check: !prevState.check }));
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="containerAddStudent">
                  <h4> Add Students</h4>

                  <Field
                    type="text"
                    className="nameStudent"
                    name="name"
                    placeholder="Name"
                  />

                  <Field
                    type="text"
                    className="lastnameStudent"
                    name="lastname"
                    placeholder="Last name"
                  />
                  <Field
                    type="text"
                    className="ageStudent"
                    name="age"
                    placeholder="Age"
                  />
                  <Field
                    type="text"
                    className="classStudent"
                    name="class"
                    placeholder="Class"
                  />
                  <button className="btnAddStudent" type="submit">
                    Add
                  </button>
                  
                </div>
              </Form>
            )}
          </Formik>
          <thead>
            <tr>
              {/*Name of the columns*/}
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>key</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) =>{
                //Show the students if they exist. For each student return a row. Everytime it is run a new one is added
                return (
                  <tr>
                    <td>
                      <button
                        className="deleteNote"
                        onClick={() => {
                          //Call action "deleteNote"
                          //deleteNote(note);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    {/*Bring the atributte of the student*/}
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

                    <NoteForm
                        key={note._id}/>
*/

export default NoteList;