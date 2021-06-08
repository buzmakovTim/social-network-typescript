import * as axios from 'axios';
import React from 'react';
import { v1 } from 'uuid';
import style from './Users.module.css'
import { throws } from 'node:assert';
import userIcon from '../../images/userIcon.png'
import { UserType } from '../../redux/usersPage-reducer';

type PropsType = {
    users: UserType[]
    totalUsersCont: number
    pageSize: number
    currentPage: number
    onPageChanged: (newPage: number) => void
}

let Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCont / props.pageSize);
        
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

        return (
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {
                    props.users.map(u => <div key={u.id} className={style.userBox}>

                        <div className={style.iconImage}>
                            <img src={(u.photos.small !== null) ? u.photos.small : userIcon} alt="" />
                        </div>
                        {/* Name */}
                        <div className={style.name}>{u.name}</div>
                        <div className={style.status}>{u.status}</div>

                        
                    </div>)
                }
            

            <div>
                <span
                    onClick={ () => {props.onPageChanged(props.currentPage - 1)}}  
                    className={style.pageNumbers}>{ '<<' }</span>
                {pages.map( p => {
                    return <span 
                        onClick={ () => {props.onPageChanged(p)}}
                        className={props.currentPage === p ? style.selectedPage : style.pageNumbers}>{" "+ p+ " "}</span>    
                })}
                <span 
                    onClick={ () => {props.onPageChanged(props.currentPage + 1)}}
                    className={style.pageNumbers}>{ '>>' }</span>
                
            </div>
            </div>
        )

    }

export default Users;
