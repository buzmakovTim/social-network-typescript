import * as axios from 'axios';
import React from 'react';
import { v1 } from 'uuid';
import { UsersPropsType } from './UsersContainer';



class Users extends React.Component<UsersPropsType> {


    constructor(props: UsersPropsType) {
        super(props);
        
        
        
    }

    componentDidMount() {
         
        if(this.props.users.length === 0) {
            axios.default.get("https://social-network.samuraijs.com/api/1.0/users?page=1&count=30")
            .then(response => {
                        this.props.setUsers(response.data.items)
                        
            })
        }
    }


//    getUsers = () => 
//    {
//         if(this.props.users.length === 0) {
//             axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        
//                     this.props.setUsers(response.data.items)
//                 })
//         }
//    }

    render() {
        return (
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {
                    this.props.users.map(u => <div key={u.id}>

                        <div>Name: {u.name}</div>

                    </div>)
                }



            </div>
        )

    }
    


}

export default Users;


// let Users = () => {

//     const dispatch = useDispatch();

//     let getUsers = () => {
        
//         axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        
//             //users = response.data.items
//                 dispatch(setUsersAC(response.data.items))
//             })

//     }
//     //let users = []
    

//     // let userTest: UserTypeNEW[] = [
//     //     {id: 1, followed: true, fullName: "Tim", status: "I'm the boss", location: {city: 'Vancouver', country: 'Canada'}},
//     //     {id: 2, followed: false, fullName: "Dima", status: "I'm the boss 2", location: {city: 'Calgary', country: 'Canada'}},
//     //     {id: 3, followed: false, fullName: "Oleg", status: "I'm the boss 3", location: {city: 'Toronto', country: 'Canada'}},
//     //   ]

    
//     let users = useSelector<AppStateType, UserTypeNEW[]>(state => state.usersPage.users) 
    
//     const usersComponets = users.map( u => {
        
//         return (
//             <div key={v1()}>
//                 <div>Name: {u.name}</div>
//                 <div>Following: {u.followed ? 'FOLLOWING' : 'NOT FOLLOWING'}</div>
//                 {/* <div>City: {u.location.city}</div> */}
//                 {/* <div>Country: {u.location.country}</div> */}
//                 <div>Status: {u.status}</div>
//                 {u.followed ? <button onClick={ () => dispatch(unfollowAC(u.id))}>Unfollow</button> 
//                             : <button onClick={ () => dispatch(followAC(u.id))}>Follow</button>}
                
//                 <hr />
//             </div>
    
            
//         )
//     })

//     return (
//         <div>
//             <div>{usersComponets}</div>
//             <div>
//                 <button onClick={ () => {getUsers()} }>Show More</button>
//             </div>
//         </div>
        


//     )
// }

// export default Users;