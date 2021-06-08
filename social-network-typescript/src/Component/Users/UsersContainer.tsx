import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import { followAC, UserType, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersPage-reducer';
import Users from './Users';
import {connect} from 'react-redux';
import {Dispatch} from 'redux'
import { decodedTextSpanIntersectsWith } from 'typescript';


type MapStatePropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCont: number,
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageSelected: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCont: state.usersPage.totalUsersCont,
        currentPage: state.usersPage.currentPage
    }
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageSelected: number) => {
            dispatch(setCurrentPageAC(pageSelected))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)