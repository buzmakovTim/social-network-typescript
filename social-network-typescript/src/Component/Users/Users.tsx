import * as axios from 'axios';
import React from 'react';
import { v1 } from 'uuid';
import style from './Users.module.css'
import { throws } from 'node:assert';
import userIcon from '../../images/userIcon.png'
import { UserType } from '../../redux/usersPage-reducer';
import { NavLink } from 'react-router-dom';


type PropsType = {
    users: UserType[]
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

                        
                    </div>)
                }
            
            
            </div>
        )

    }

export default Users;
