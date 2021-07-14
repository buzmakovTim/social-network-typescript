import React from 'react';
import { AppStateType } from "../../redux/redux-store"
import { UserType} from '../../redux/usersPage-reducer';
import {createSelector} from 'reselect';

//  NOTE! 
//
// For simple selectors as we have here we don't need to do anything



// Selector getUsers
export const getUsersSelector = (state: AppStateType): UserType[] => {
    return state.usersPage.users;
}


export const getUsers = createSelector(getUsersSelector,  (users) => {
    
    return users;
})








// Selector getPageSize
export const getPageSize = (state: AppStateType): number => {

    return state.usersPage.pageSize;
}

// Selector getTotalUsersCont
export const getTotalUsersCont = (state: AppStateType): number => {

    return state.usersPage.totalUsersCont;
}

// Selector getCurrentPage
export const getCurrentPage = (state: AppStateType): number => {

    return state.usersPage.currentPage;
}

// Selector getIsFetching
export const getIsFetching = (state: AppStateType): boolean => {

    return state.usersPage.isFetching;
}

// Selector getFollowingInProgress
export const getFollowingInProgress = (state: AppStateType): number[] => {

    return state.usersPage.followingInProgress;
}

export default {};