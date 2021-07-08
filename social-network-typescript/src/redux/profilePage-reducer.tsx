import React from 'react';
import { v1 } from 'uuid';
import { profileAPI, usersAPI } from '../api/api';
import { ActionsType } from '../types/types';
// import { ActionsType, PostsType, UserProfilePageType } from './state';
import { PhotosType } from './usersPage-reducer';
import { Dispatch } from 'redux'; 
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


export type ContactsType = {
  facebook: string | null;
  website: string | null ;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
}
export type InitialStateType = {
  profile: ProfileType | null;
  status: string | null;
}

export type ProfileType = {
  aboutMe: string | null;
  contacts: ContactsType | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  userId: number | null;
  photos: PhotosType | null;
}

// Initial state for Dialog Page
let initialState: InitialStateType = {
    profile: null,
    status: ""
    }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState


const profilePageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    
    switch(action.type){

        
        case SET_USER_PROFILE: {
          return {
            ...state, 
            profile: action.profile
          }
        }

        case SET_STATUS: {
          return {
            ...state, 
            status: action.status
          }
        }

        default: 
              return state
    }
}

//
// Action Creators Start
//
export const addPostAC = () => {
    return { 
      type: ADD_POST
    } as const
  }
  export const changeNewTextActionTypeAC = (newText: string) => {
    return {
      type: CHANGE_NEW_POST_TEXT,
      newText
    } as const
  }
  export const setUserProfileAC = (profile: ProfileType) => {
    return {
      type: SET_USER_PROFILE,
      profile
    } as const
  }
  export const setStatus = (status: string) => {
    return {
      type: SET_STATUS,
      status
    } as const
  }
//
// Action Creators End
//

//Thunks Start
export const getUserProfile = (id: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(id).then(response_Profile => {
      dispatch(setUserProfileAC(response_Profile))
    })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then( response => {
      
      dispatch(setStatus(response));
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    
    
    profileAPI.updateStatus(status).then( response => {

      // if no error we gonna update State
      
        if(response.data.resultCode === 0){
          dispatch(setStatus(status));
          //debugger
          //alert(response.statusText)
        }

    })
}



export default profilePageReducer;