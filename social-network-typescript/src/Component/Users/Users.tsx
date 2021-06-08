import * as axios from 'axios';
import React from 'react';
import { v1 } from 'uuid';
import { UsersPropsType } from './UsersContainer';
import style from './Users.module.css'
import { throws } from 'node:assert';

// Class component 
class Users extends React.Component<UsersPropsType> {


    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {

        if(this.props.users.length === 0) {
            // Server request
            axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
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
            this.props.setCurrentPage(pageToSet)
            axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageToSet}&count=${this.props.pageSize}`)
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

        let pagesCount = Math.ceil(this.props.totalUsersCont / this.props.pageSize);
        
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {
                    this.props.users.map(u => <div key={u.id}>

                        <div>Name: {u.name}</div>

                    </div>)
                }


            <div>
                <span
                    onClick={ () => {this.onPageChanged(this.props.currentPage - 1)}}  
                    className={style.pageNumbers}>{ '<<' }</span>
                {pages.map( p => {
                    return <span 
                        onClick={ () => {this.onPageChanged(p)}}
                        className={this.props.currentPage === p ? style.selectedPage : style.pageNumbers}>{" "+ p+ " "}</span>    
                })}
                <span 
                    onClick={ () => {this.onPageChanged(this.props.currentPage + 1)}}
                    className={style.pageNumbers}>{ '>>' }</span>
                
            </div>
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