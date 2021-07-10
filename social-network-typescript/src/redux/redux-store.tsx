import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogPageReducer from './dialogsPage-reducer';
import friendsPageSideBarReducer from './friendsPageSideBar-reducer';
import profilePageReducer from './profilePage-reducer';
import thunkMiddleware from 'redux-thunk'
import usersPageReducer from './usersPage-reducer';
import authReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form' 
import appReducer from './app-reducer';


export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    friendsPageSideBar: friendsPageSideBarReducer,
    usersPage: usersPageReducer,
    authorizing: authReducer,
    form: formReducer,
    app: appReducer
}) 


export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>



// For thunks applyMiddleware()
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;