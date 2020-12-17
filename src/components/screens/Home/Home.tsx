//import './style.css';
import React, { useEffect } from 'react';
import AppNavbar from '../AppNavBar/AppNavBar';
import {getNotes} from '../../../store/note/actions'
import { INotesList, INoteReduxProps } from '../../../interfaces';
import { connect } from 'react-redux';

const NotesList = ({
    getNotes,
    note
}:  INotesList) => {
    useEffect(() => {
        getNotes()//.then
    }, [getNotes]);

const {notes} = note;
    return (
        <React.Fragment>
            <AppNavbar/>
            <nav className="navbar navbar-expant-lg bg-light mt-3">
                <div className="container-md">
                    <div>Las tarjetas creadas por los usuarios de todo el mundo son:</div>
                </div>
            </nav>
            <div className="row justify-content-center">
                {notes.map(({_id,title,description}) =>(
                    <div key={_id} className="col-12 col-sm-8 col-md-6 col-xl-4 card m-2">
                        <div className="card text-center">
                            <div className="card-body">Title: {title}</div>
                            <div className="card-text">Description: {description}</div>
                            <div className="card-text">key: {_id}</div>
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

export default connect(mapStateToProps,{getNotes})(NotesList);