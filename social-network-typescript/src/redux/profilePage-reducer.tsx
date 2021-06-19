import React from 'react';
import { v1 } from 'uuid';
import { ActionsType, PostsType, UserProfilePageType } from './state';
import { PhotosType } from './usersPage-reducer';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


export type ContactsType = {
  facebook: string | null
  website: string | null 
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}
export type InitialStateType = {
  profile: ProfileType | null
}

export type ProfileType = {
  aboutMe: string | null
  contacts: ContactsType | null
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number | null
  photos: PhotosType | null
}

// Initial state for Dialog Page
let initialState: InitialStateType = {
    profile: null
    }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState


const profilePageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    //@ts-ignore
    switch(action.type){

        // case ADD_POST: {
        //   const stateCopy = {...state}
        //   let newPost: PostsType = {
        //       user: {...state.userLoggedIn},
        //       //postText: action.postText,
        //       postText: state.newPostText, 
        //       likes: 0,
        //     };
        //     stateCopy.posts.push(newPost);
        //     stateCopy.newPostText = '';
        //   return stateCopy    
        // }
            
        // case CHANGE_NEW_POST_TEXT: {
        //   const stateCopy = {...state}
        //   stateCopy.newPostText = action.newText
        //   return stateCopy
        // }
        case SET_USER_PROFILE: {
          //@ts-ignore
          return {...state, profile: action.profile}
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
//
// Action Creators End
//

export default profilePageReducer;