import './App.css';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import SignIn from './components/screens/SignIn/SignIn';
import SignUp from './components/screens/SignUp/SignUp';
import NotesList from './components/screens/NoteList/NotesList';
import {loadUser} from './store/user/actions';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/screens/Home/Home';

const App = () => {
/*  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
*/
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/notes" component={NotesList} />
            <Redirect path="/" to="/home"/>
        </Switch>
      </div>
    </Provider>
  );
};

export default App;