import React from 'react';
import { addSyntheticTrailingComment, FlowLabel, isTemplateLiteralTypeSpan } from 'typescript';
import { v1 } from 'uuid';
import { ActionsType } from './state';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

// Initial state for Dialog Page
let initialState: InitialStateType = {
    users : [],
    pageSize:  100,
    totalUsersCont: 0,
    currentPage: 1,
    isFetching: false
  }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState
export type PhotosType = {
  small: string | null
  large: string | null
}

export type UserType = {
  name: string | null
  id: number
  uniqueUrlName: string | null
  photos: PhotosType
  status: string | null
  followed: boolean
}

export type InitialStateType = {
  users: UserType[]
  pageSize: number,
  totalUsersCont: number,
  currentPage: number,
  isFetching: boolean
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

          // Users will add to the array
          //let stateCopy = {...state, users: [ ...state.users, ...action.users ]}

          let stateCopy = {...state, users: [...action.users]}
          return stateCopy
        }

        case SET_CURRENT_PAGE: {

          return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
          return {...state, totalUsersCont: action.totalCount}
        }
        
        case TOGGLE_IS_FETCHING: {
          return {...state, isFetching: action.isFetching}
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
export const setCurrentPageAC = (pageSelected: number) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage: pageSelected
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
      type: SET_TOTAL_USERS_COUNT,
      totalCount: totalCount
    } as const
}
export const setToggleIsFetchingAC = (isFetching: boolean) => {
    return {
      type: TOGGLE_IS_FETCHING,
      isFetching: isFetching
    } as const
}
//
// Action Creators End
//

export default usersPageReducer;