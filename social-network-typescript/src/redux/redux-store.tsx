import React from 'react';
import {combineReducers, createStore} from 'redux';
import dialogPageReducer from './dialogsPage-reducer';
import friendsPageSideBarReducer from './friendsPageSideBar-reducer';
import profilePageReducer from './profilePage-reducer';
import { StoreType } from './state';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    friendsPageSideBar: friendsPageSideBarReducer
}) 

let store: StoreType = createStore(reducers);


export default store;