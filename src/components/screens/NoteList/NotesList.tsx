import './stylelist.css';
import React, { useEffect } from 'react';
import AppNavbar from '../../AppNavBar';
import {getNotes, deleteNote} from '../../../store/note/actions'
import { INotesList, INoteReduxProps } from '../../../interfaces';
import { connect } from 'react-redux';
import NoteForm from '../NoteForm/NoteForm'

const NotesList = ({
  getNotes,
  note,
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
            <NoteForm/>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>key</th>
            </tr>
          </thead>
          <tbody>
            {notes.map(({_id,title,description}) =>(
                  <tr key={_id}>
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
                    <td>key: {_id}</td>
                  </tr>
                )
            )}
          </tbody>
        </React.Fragment >
    );
};
const mapStateToProps = (state: INoteReduxProps) => ({
  note: state.note,
});

export default connect(mapStateToProps,{getNotes, deleteNote})(NotesList);