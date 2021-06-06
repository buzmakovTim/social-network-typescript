import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import { followAC, UserType, setUsersAC, unfollowAC } from '../../redux/usersPage-reducer';
import Users from './Users';
import {connect} from 'react-redux';
import {Dispatch} from 'redux'


type MapStatePropsType = {
    users: UserType[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)