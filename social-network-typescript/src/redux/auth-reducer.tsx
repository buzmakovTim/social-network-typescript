import React from 'react';
import { authAPI, usersAPI } from '../api/api';
// import { ActionsType } from './state';
import {Dispatch} from 'redux';
import { ActionsType } from '../types/types';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
// import { ActionsType } from './redux-store';

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
            
            ...action.payload
            //isAuth: action.payload.isAuth
          
        }
          
        // In all other cases return state
        default:
            return state 
    }
}
//
// Action Creators Start
//
export const setUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
      type: SET_USER_DATA,
      payload: {
          id,
          login,
          email,
          isAuth
      }
    } as const;
  }
//
// Action Creators End
//
//
// Thunks
//
export const getAuthUserData = () => (dispatch: Dispatch) => 
    authAPI.me()
        .then(data => {
          if(data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true))
          }
        })

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => 
    authAPI.login(email, password, rememberMe)
        .then(data => {
          if(data.resultCode === 0) {
            //@ts-ignore
            dispatch(getAuthUserData())
          }
        })

export const logout = () => (dispatch: Dispatch) => 
    authAPI.logout()
        .then(data => {
          if(data.resultCode === 0) {
            //@ts-ignore
            dispatch(setUserData(null, null, null, false))

          }
        })
//
// Thunks
//


export default authReducer;