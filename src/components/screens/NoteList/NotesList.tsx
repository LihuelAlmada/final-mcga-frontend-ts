import './notelist.css';
import React, { useEffect } from 'react';
import AppNavbar from '../AppNavBar/AppNavBar';
import {getNotes, deleteNote} from '../../../store/note/actions'
import { INotesList, INoteReduxProps } from '../../../interfaces';
import { connect } from 'react-redux';
import NoteForm from '../NoteForm/NoteForm'

const NotesList = ({
    getNotes,
    note,
    deleteNote
}:  INotesList) => {
    useEffect(() => {
        getNotes()//.then
    }, [getNotes]);

const handleDelete = (id: string) => {
    deleteNote(id);
};

const {notes} = note;
    return (
        <React.Fragment>
            <AppNavbar/>
            <NoteForm/>
                <div className="footer">
                    <div>Title</div>
                    <div>Description</div>
                    <div>Date</div>
                    <div>key</div>
                </div>
            <div>
                {notes.map(({_id,title,description}) =>(
                    <div key={_id} className="note">
                        <div>
                            <div>Title: {title}</div>
                            <div>Description: {description}</div>
                            <div>key: {_id}</div>
                        </div>
                        <div>
                            <button
                                className="deleteNote"
                                onClick={() => 
                                    //Call action "deleteNote"
                                    handleDelete(_id)
                                }
                            >
                            Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment >
    );
};
const mapStateToProps = (state: INoteReduxProps) => ({
    note: state.note
});

export default connect(mapStateToProps,{getNotes, deleteNote})(NotesList);