import axios from 'axios';
import React from 'react';
import { v1 } from 'uuid';
import style from './Users.module.css'
import { throws } from 'node:assert';
import userIcon from '../../images/userIcon.png'
import { UserType } from '../../redux/usersPage-reducer';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';



type PropsType = {
    users: UserType[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    //toggleIsFolowingProgress: (followingInProgress: boolean, id: number) => void;
    followingInProgress: number[];
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
                            
                            // Disabling button while following in progress
                            // 
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                                //Server request UNFOLLOW
                                props.unfollow(u.id)
                                }
                            } 
                                >Unfollow</button> : 
                            
                            // Disabling button while following in progress
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                                              
                                //Server request FOLLOW
                                props.follow(u.id)    
                            }} 
                                >Follow</button>}
                            {/* Buttons FOLLOW UNFOLLOW  end*/}


                        </div>

                        
                    </div>)
                }
            
            
            </div>
        )

    }

export default Users;
