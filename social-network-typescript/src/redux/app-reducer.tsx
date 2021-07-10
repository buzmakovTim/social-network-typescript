import React from 'react';
import { authAPI, usersAPI } from '../api/api';
// import { ActionsType } from './state';
import {Dispatch} from 'redux';
import { ActionsType } from '../types/types';
import { stopSubmit } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { getAuthUserData } from './auth-reducer';
// import { ActionsType } from './redux-store';

const INITIALAZE_SUCCESS = 'INITIALAZE_SUCCESS'

export type InitialStateType = {
    initialazed: boolean
}

// Initial state for Dialog Page
let initialState: InitialStateType = {
  initialazed: false
  }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState

const appReducer = (state: InitialStateType = initialState, action: ActionsType):  InitialStateType => {
    
    
    switch(action.type){
        
      
        case INITIALAZE_SUCCESS:     
       
        return {
            ...state,
            initialazed: true
        }
          
        // In all other cases return state
        default:
            return state 
    }
}
//
// Action Creators Start
//
export const initializeSuccess = () => {
    return {
      type: INITIALAZE_SUCCESS,
    } as const;
  }
//
// Action Creators End
//
//
// Thunks
//
export const initializeApp = () => (dispatch: Dispatch) => {

  //@ts-ignore
  let dispatchResult = dispatch(getAuthUserData());

    dispatchResult.then( () => {
        dispatch(initializeSuccess())
    })
  
}
  

// authAPI.me()
    //     .then(data => {
    //       if(data.resultCode === 0) {
    //         let {id, login, email} = data.data;
    //         dispatch(setUserData(id, login, email, true))
    //       }
    //     })

//
// Thunks
//


export default appReducer;