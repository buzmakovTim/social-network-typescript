import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';
import { AppStateType } from '../../redux/redux-store';
import { UsersPageType, UserTypeNEW } from '../../redux/state';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersPage-reducer';


let Users = () => {


    let userTest: UserTypeNEW[] = [
        {id: 1, followed: true, fullName: "Tim", status: "I'm the boss", location: {city: 'Vancouver', country: 'Canada'}},
        {id: 2, followed: false, fullName: "Dima", status: "I'm the boss 2", location: {city: 'Calgary', country: 'Canada'}},
        {id: 3, followed: false, fullName: "Oleg", status: "I'm the boss 3", location: {city: 'Toronto', country: 'Canada'}},
      ]

    const dispatch = useDispatch();
    let users = useSelector<AppStateType, UserTypeNEW[]>(state => state.users.users) 
    
    const usersComponets = users.map( u => {
        
        return (
            <div key={v1()}>
                <div>Name: {u.fullName}</div>
                <div>Following: {u.followed ? 'FOLLOWING' : 'NOT FOLLOWING'}</div>
                <div>City: {u.location.city}</div>
                <div>Country: {u.location.country}</div>
                <div>Status: {u.status}</div>
                {u.followed ? <button onClick={ () => dispatch(unfollowAC(u.id))}>Unfollow</button> 
                            : <button onClick={ () => dispatch(followAC(u.id))}>Follow</button>}
                
                <hr />
            </div>
    
            
        )
    })

    return (
        <div>
            <div>{usersComponets}</div>
            <div>
                <button onClick={ () => {dispatch(setUsersAC(userTest))} }>Show More</button>
            </div>
        </div>
        


    )
}

export default Users;