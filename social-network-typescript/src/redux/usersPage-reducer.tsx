import React from 'react';
// import { addSyntheticTrailingComment, FlowLabel, isTemplateLiteralTypeSpan } from 'typescript';
import { v1 } from 'uuid';
import { usersAPI } from '../api/api';
import { ActionsType } from '../types/types';
import { Dispatch } from 'redux'; 



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

// Initial state for Dialog Page
let initialState: InitialStateType = {
    users : [],
    pageSize:  100,
    totalUsersCont: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
  isFetching: boolean,
  followingInProgress: number[],
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

        // For disabling button while 
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
          return {
                ...state, 
                
                followingInProgress: action.isFetching
                
                ? [...state.followingInProgress, action.id]
                
                : state.followingInProgress.filter(id => id != action.id)
          }
        }
        
        default: 
              return state
    }
}

//
// Action Creators Start
//
export const followSuccess = (userId: number) => {
    return { 
        type: FOLLOW,
        userId: userId
    } as const
  }
export const unfollowSuccess = (userId: number) => {
    return {
      type: UNFOLLOW,
      userID: userId
    } as const
  }
export const setUsers = (users: UserType[]) => {
    return {
      type: SET_USERS,
      users: users
    } as const
}
export const setCurrentPage = (pageSelected: number) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage: pageSelected
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
      type: SET_TOTAL_USERS_COUNT,
      totalCount: totalCount
    } as const
}
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
      type: TOGGLE_IS_FETCHING,
      isFetching: isFetching
    } as const
}
export const setToggleIsFollowingProgress = (isFetching: boolean, id: number) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    id: id,
  } as const
}
//
// Action Creators End
//


// Thunks Start...
// Get Users
export const getUsers = (currentPage: number, pageSize: number) => {

  return (dispatch: Dispatch) => {
  
    dispatch(setToggleIsFetching(true));
              // Server request Getting Users
              usersAPI.getUsers(currentPage, pageSize).then(data => {
                          
                          dispatch(setToggleIsFetching(false));
                          dispatch(setUsers(data.items));
                          dispatch(setTotalUsersCount(data.totalCount));
              })
  } 
}

export const unfollow = (id: number) => {

  return(dispatch: Dispatch) => {

    dispatch(setToggleIsFollowingProgress(true, id)) // Following in Progress START
              
              usersAPI.unfollow(id).then(data => {
                  
                  if(data.resultCode === 0){
                      dispatch(unfollowSuccess(id))
                  }
    dispatch(setToggleIsFollowingProgress(false, id)) // Following in Progress STOP
              })
  }
}

export const follow = (id: number) => {

  return(dispatch: Dispatch) => {

    dispatch(setToggleIsFollowingProgress(true, id)) // Following in Progress START
              
              usersAPI.follow(id).then(data => {
                  
                  if(data.resultCode === 0){
                      dispatch(followSuccess(id))
                  }
    dispatch(setToggleIsFollowingProgress(false, id)) // Following in Progress STOP
              })
  }
}
//Thunks End

export default usersPageReducer;