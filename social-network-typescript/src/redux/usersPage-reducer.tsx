import React from 'react';
import { addSyntheticTrailingComment, FlowLabel } from 'typescript';
import { v1 } from 'uuid';
import { ActionsType } from './state';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

// Initial state for Dialog Page
let initialState: InitialStateType = {
    users : [
            //{name: "Tim", id: 1, uniqueUrlName: '', photos: {small: '', large: ''}, status: 'Status', followed: true},
            //{name: "Tim", id: 2, uniqueUrlName: '', photos: {small: '', large: ''}, status: 'Status', followed: true},
            //{name: "Tim", id: 3, uniqueUrlName: '', photos: {small: '', large: ''}, status: 'Status', followed: true},
    ]
  }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState
export type PhotosType = {
  small: string
  large: string
}

export type UserType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: PhotosType
  status: string,
  followed: boolean 
}

export type InitialStateType = {
  users: UserType[]
}


const usersPageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch(action.type){

        case FOLLOW: {
          let stateCopy = {...state, 
                          users: state.users.map( u => {
                            if(u.id === action.userId) {
                              return {...u, followed: true}
                            }
                            return u
                          })
                        }
          return stateCopy    
        }

        case UNFOLLOW: {
          let stateCopy = {...state, 
                          users: state.users.map( u => {
                            if(u.id === action.userID) {
                              return {...u, followed: false}
                            }
                            return u
                          })
                        }
            return stateCopy      
        }

        case SET_USERS: {

          let stateCopy = {...state, users: [ ...state.users, ...action.users ]}
          return stateCopy
        }
        
        default: 
              return state
    }
}

//
// Action Creators Start
//
export const followAC = (userId: number) => {
    return { 
        type: FOLLOW,
        userId: userId
    } as const
  }
export const unfollowAC = (userId: number) => {
    return {
      type: UNFOLLOW,
      userID: userId
    } as const
  }
export const setUsersAC = (users: UserType[]) => {
    return {
      type: SET_USERS,
      users: users
    } as const
}
//
// Action Creators End
//

export default usersPageReducer;