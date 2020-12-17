import './style.css';
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
            <div className="footer">
                <div>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Date</div>
                    <div>key</div>
                </div>
            </div>
            <div>
                {notes.map(({_id,title,description}) =>(
                    <div key={_id} className="note">
                        <div>
                        </div>
                        <div>Title: {title}</div>
                        <div>Description: {description}</div>
                        <div>key: {_id}</div>
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