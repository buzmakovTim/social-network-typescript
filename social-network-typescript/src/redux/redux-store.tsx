import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogPageReducer from './dialogsPage-reducer';
import friendsPageSideBarReducer from './friendsPageSideBar-reducer';
import profilePageReducer from './profilePage-reducer';
import { StoreType } from './state';
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    friendsPageSideBar: friendsPageSideBarReducer
}) 


export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
