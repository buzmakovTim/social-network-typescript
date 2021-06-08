import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import { followAC, UserType, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, setToggleIsFetchingAC } from '../../redux/usersPage-reducer';
import Users from './Users';
import {connect} from 'react-redux';
import {Dispatch} from 'redux'
import { decodedTextSpanIntersectsWith } from 'typescript';
import axios from 'axios';
import preloader from '../../images/preloader.gif'



class UsersContainerComponent extends React.Component<UsersPropsType> {

    componentDidMount() {

        if(this.props.users.length === 0) {

            this.props.setToggleIsFetching(true)
            // Server request
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                        this.props.setToggleIsFetching(false)
                        this.props.setUsers(response.data.items)
                        this.props.setTotalUsersCount(response.data.totalCount)     
            })
        }
    }

    onPageChanged = (pageNumber: number) => {

        let pageToSet = 1
          if(pageNumber < pageToSet){
            pageToSet = 1
          } else if(pageNumber > Math.ceil(this.props.totalUsersCont / this.props.pageSize)) {
            pageToSet = Math.ceil(this.props.totalUsersCont / this.props.pageSize)
          } else {
            pageToSet = pageNumber
          }
        
        if(this.props.currentPage !== pageToSet){
            this.props.setUsers([])
            this.props.setToggleIsFetching(true)
            this.props.setCurrentPage(pageToSet)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageToSet}&count=${this.props.pageSize}`)
                .then(response => {
                            this.props.setToggleIsFetching(false)
                            this.props.setUsers(response.data.items)          
                })
        }
    }

    
    render() {

        return (
            <>
                {this.props.isFetching ? <img src={preloader}/> : null}

                <Users users={this.props.users}
                   totalUsersCont={this.props.totalUsersCont}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                    />
                
            </>
        )

    }
}

// Types
type MapStatePropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCont: number,
    currentPage: number,
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageSelected: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCont: state.usersPage.totalUsersCont,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setToggleIsFetching: (isFetching: boolean) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersContainerComponent)