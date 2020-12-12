import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import SignIn from './components/screens/SignIn/SignIn';
import SignUp from './components/screens/SignUp/SignUp';
import NoteList from './components/screens/NoteList/NoteList';
//import NoteForm from './components/screens/NoteForm/NoteForm';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
          <Route exact path="/" component={NoteList} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<Route path="/notes" component={NoteForm} />
reportWebVitals();
