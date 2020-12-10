import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './combineReducers';

export const  store  =  createStore ( reducer ,  composeWithDevTools (applyMiddleware())); //dentro de la funcion tendria que ir "...middleware" pero no me lo tomo
    
