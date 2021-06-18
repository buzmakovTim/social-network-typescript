import React from 'react';
import { AppStateType } from '../../redux/redux-store';
import { followAC, UserType, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, setToggleIsFetchingAC, setToggleIsFollowingProgressAC } from '../../redux/usersPage-reducer';
import Users from './Users';
import {connect} from 'react-redux';
import {Dispatch} from 'redux'
import { decodedTextSpanIntersectsWith } from 'typescript';
import axios from 'axios';
import { Preloader } from '../Common/Preloader/Preloader';
import style from './UsersContainer.module.css'
import { usersAPI } from '../../api/api';




class UsersContainerComponent extends React.Component<UsersPropsType> {

    componentDidMount() {

        if(this.props.users.length === 0) {

            this.props.setToggleIsFetching(true)
            // Server request Getting Users
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                        this.props.setToggleIsFetching(false)
                        this.props.setUsers(data.items)
                        this.props.setTotalUsersCount(data.totalCount)     
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
            
            // Server request Getting Users
            usersAPI.getUsers(pageToSet, this.props.pageSize).then(data => {
                            this.props.setToggleIsFetching(false)
                            this.props.setUsers(data.items)          
                })
        }
    }



    pagination = () => {

        let pagesCount = Math.ceil(this.props.totalUsersCont / this.props.pageSize);
        
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        }

        return <>
        <div className={style.pagination}>
                <span
                    onClick={ () => {this.onPageChanged(this.props.currentPage - 1)}}  
                    className={style.pageNumbers}>{ '<<' }</span>
                {pages.map( p => {

                    if(p+3 === this.props.currentPage ||
                        p+2 === this.props.currentPage ||
                        p+1 === this.props.currentPage || 
                        p-1 === this.props.currentPage ||
                        p-2 === this.props.currentPage ||
                        p-3 === this.props.currentPage || 
                        p === this.props.currentPage){
                        return <span 
                        onClick={ () => {this.onPageChanged(p)}}
                        className={this.props.currentPage === p ? style.selectedPage : style.pageNumbers}>{" "+ p+ " "}</span>    
                    }if(p === pagesCount) {
                        return <>
                        <span>{". . ."}</span>
                        <span 
                        onClick={ () => {this.onPageChanged(p)}}
                        className={this.props.currentPage === p ? style.selectedPage : style.pageNumbers}>{p}</span>
                        </>
                    }if(p === 1) {
                        return <><span 
                        onClick={ () => {this.onPageChanged(p)}}
                        className={this.props.currentPage === p ? style.selectedPage : style.pageNumbers}>{p}</span>
                        <span>{". . ."}</span>
                        </>
                    }
                    
                })}
                <span 
                    onClick={ () => {this.onPageChanged(this.props.currentPage + 1)}}
                    className={style.pageNumbers}>{ '>>' }</span>    
            </div>
            </>
            {/* Paging ends */}

    }

    
    render() {

        return (
            <div>
                
            {/* Paging here */}
            {this.pagination()}

            <div className={style.usersBox}>
                {this.props.isFetching ? <Preloader /> : null}

                <Users users={this.props.users} 
                        follow={this.props.follow} 
                        unfollow={this.props.unfollow} 
                        toggleIsFolowingProgress={this.props.setToggleIsFollowingProgress}
                        followingInProgress={this.props.followingInProgress}/>
                
            </div>

            {/* Paging here */}
            {this.pagination()}

            </div>
        
            
        )

    }
}

// Types
type MapStatePropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCont: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean,
}
type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (pageSelected: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    setToggleIsFetching: (isFetching: boolean) => void;
    setToggleIsFollowingProgress: (followingInProgress: boolean) => void;
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCont: state.usersPage.totalUsersCont,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
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
        },
        setToggleIsFollowingProgress: (followingInProgress: boolean) => {
            dispatch(setToggleIsFollowingProgressAC(followingInProgress))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersContainerComponent)