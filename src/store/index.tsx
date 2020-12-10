import {createStore, applyMiddleware} from 'redux';
import {reducer} from './combineReducers';
import { composeWithDevTools   } from 'redux-devtools-extension';

export const  store  =  createStore ( reducer ,  composeWithDevTools (applyMiddleware())); //dentro de la funcion tendria que ir "...middleware" pero no me lo tomo
    
