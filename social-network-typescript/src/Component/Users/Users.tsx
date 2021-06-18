import axios from 'axios';
import React from 'react';
import { v1 } from 'uuid';
import style from './Users.module.css'
import { throws } from 'node:assert';
import userIcon from '../../images/userIcon.png'
import { UserType } from '../../redux/usersPage-reducer';
import { NavLink } from 'react-router-dom';
import { followUnfollowAPI } from '../../api/api';


type PropsType = {
    users: UserType[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    toggleIsFolowingProgress: (followingInProgress: boolean) => void;
    followingInProgress: boolean;
}

let Users = (props: PropsType) => {



        return (
            <div>
           
                {
                    props.users.map(u => <div key={u.id} className={style.userBox}>

                        <div className={style.iconImage}>
                            <NavLink to={'/profile/'+u.id}>
                                <img src={(u.photos.small !== null) ? u.photos.small : userIcon} alt="" />
                            </NavLink>
                            
                        </div>
                        {/* Name */}
                        <div className={style.name}>{u.name}</div>
                        {/* <div className={style.status}>{u.status} */}
                        
                        <div>
                        <h6 className={style.status}>{u.status}</h6>
                            </div>
                        {/* </div> */}
                        <div>

                            {/* Buttons FOLLOW UNFOLLOW  start*/}
                            {u.followed ? 
                            
                            <button disabled={props.followingInProgress} onClick={ () => {
                                //Server request FOLLOW
                                props.toggleIsFolowingProgress(true) // Following in Progress START
                                followUnfollowAPI.unfollow(u.id).then(data => {
                                    
                                    if(data.resultCode === 0){
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFolowingProgress(false) // Following in Progress STOP
                                })}} 
                                >Unfollow</button> : 
                                          
                            <button disabled={props.followingInProgress} onClick={ () => {
                                              
                                //Server request UNFOLLOW
                                props.toggleIsFolowingProgress(true) // Following in Progress START             
                                followUnfollowAPI.follow(u.id).then(data => {
                                    if(data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFolowingProgress(false) // Following in Progress STOP    
                                })}} 
                                >Follow</button>}
                            {/* Buttons FOLLOW UNFOLLOW  end*/}


                        </div>

                        
                    </div>)
                }
            
            
            </div>
        )

    }

export default Users;
