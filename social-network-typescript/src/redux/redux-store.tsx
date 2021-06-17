import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogPageReducer from './dialogsPage-reducer';
import friendsPageSideBarReducer from './friendsPageSideBar-reducer';
import profilePageReducer from './profilePage-reducer';
import { StoreType } from './state';
import thunkMiddleware from 'redux-thunk'
import usersPageReducer from './usersPage-reducer';
import authReducer from './auth-reducer';

export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    friendsPageSideBar: friendsPageSideBarReducer,
    usersPage: usersPageReducer,
    authorizing: authReducer,
}) 


export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer);
