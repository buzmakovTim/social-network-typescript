import React from 'react';
import { ActionsType } from './state';

const SET_USER_DATA = 'SET_USER_DATA'

export type InitialStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

// Initial state for Dialog Page
let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
  }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState

const authReducer = (state: InitialStateType = initialState, action: ActionsType):  InitialStateType => {
    
    
    switch(action.type){
        
        case SET_USER_DATA:     
        return {
            ...state,
            ...action.data,
            isAuth: true
          
        }
          
        // In all other cases return state
        default:
            return state 
    }
}
//
// Action Creators Start
//
export const setUserDataAC = (id: number, login: string, email: string) => {
    return {
      type: SET_USER_DATA,
      data: {
          id,
          login,
          email,
      }
    } as const
  }
//
// Action Creators End
//


export default authReducer;