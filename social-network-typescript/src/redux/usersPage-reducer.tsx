import React from 'react';
import { addSyntheticTrailingComment, FlowLabel } from 'typescript';
import { v1 } from 'uuid';
import { ActionsType, PostsType, UserProfilePageType, UsersPageType, UserTypeNEW } from './state';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

// Initial state for Dialog Page
let initialState: UsersPageType = {
    users : [
      // {id: 1, followed: true, fullName: "Tim", status: "I'm the boss", location: {city: 'Vancouver', country: 'Canada'}},
      // {id: 2, followed: false, fullName: "Dima", status: "I'm the boss 2", location: {city: 'Calgary', country: 'Canada'}},
      // {id: 3, followed: false, fullName: "Oleg", status: "I'm the boss 3", location: {city: 'Toronto', country: 'Canada'}},
    ]
  }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState


const usersPageReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {

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
export const setUsersAC = (users: UserTypeNEW[]) => {
    return {
      type: SET_USERS,
      users: users
    } as const
}
//
// Action Creators End
//

export default usersPageReducer;