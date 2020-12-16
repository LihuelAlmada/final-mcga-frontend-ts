import React,{ useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import AppNavbar from './components/screens/AppNavBar/AppNavBar';
import SignIn from './components/screens/SignIn/SignIn';
import SignUp from './components/screens/SignUp/SignUp';
import NotesList from './components/screens/NoteList/NotesList';
//import {loadUser} from './store/user/actions';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

const App = () => {
  /*useEffect(() => {
    store.dispatch(loadUser());
  }, []);*/

  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route exact path="/home" component={NotesList} />
            <Redirect path="/" to="/home"/>
        </Switch>
      </div>
    </Provider>
  );
};

export default App;