//import './notelist.css';
import React, { useEffect } from 'react';
import AppNavbar from '../AppNavBar/AppNavBar';
import LogOut from '../LogOut/LogOut';
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
//col-12 col-sm-8 col-md-6 col-xl-4
const {notes} = note;
    return (
        <React.Fragment>
            <AppNavbar/>
            <NoteForm/>
            <LogOut/>
            <nav className="navbar navbar-expant-lg bg-light mt-3">
                <div className="container-md">
                    <div>Las tarjetas creadas por los usuarios de todo el mundo son:</div>
                </div>
            </nav>
            <div className="row justify-content-center">
                {notes.map(({_id,title,description}) =>(
                <div key={_id} className="col-12 col-sm-8 col-md-6 col-xl-4 card m-2">
                    <div className="row justify-content-center">
                        <div className="card text-center">
                            <div className="card-body">Title: {title}</div>
                            <div className="card-text">Description: {description}</div>
                            <div className="card-text">key: {_id}</div>
                            <div className="card-body">
                                <button
                                    className="btn btn-danger btn-block btn-sm"
                                    onClick={() => 
                                        //Call action "deleteNote"
                                        handleDelete(_id)
                                    }
                                >
                                Delete
                                </button>
                            </div>
                        </div>
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