import './stylelist.css';
import React, { useEffect } from 'react';
import AppNavbar from '../../AppNavBar';
import { Formik, Form, Field } from "formik";
import {getNotes, deleteNote} from '../../../store/note/actions'
import { INotesList, INoteReduxProps } from '../../../interfaces';
import { connect } from 'react-redux';

const NotesList = ({
  getNotes,
  note,
  isAuthenticated,
  deleteNote
}: INotesList) => {
  useEffect(() => {
    getNotes();
  }, [getNotes]);

const handleDelete = (id: string) => {
  deleteNote(id);
};

const {notes} = note;
    return (
        <React.Fragment>
            <AppNavbar />
            <Formik
            initialValues={{ title: "", description: "", updateupdatedAt: "" }}
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
                    className="titleNote"
                    name="title"
                    placeholder="Title"
                  />
                  <Field
                    type="text"
                    className="descriptionNote"
                    name="description"
                    placeholder="Description"
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
            {notes.map(({_id,title,description,updatedAt}) =>{
                return (
                  <tr>
                    <td>
                      <button
                        className="deleteNote"
                        onClick={() => 
                          //Call action "deleteNote"
                          handleDelete(_id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                    <td>Title: {title}</td>
                    <td>Description: {description}</td>
                    <td>Date: {updatedAt}</td>
                    <td>key: {_id}</td>
                  </tr>
                );
              })}
          </tbody>
        </React.Fragment >
    );
};
const mapStateToProps = (state: INoteReduxProps) => ({
  note: state.note,
});

export default connect(mapStateToProps,{getNotes, deleteNote})(NotesList);