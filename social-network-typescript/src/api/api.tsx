import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cb837fe2-1523-4fe4-be8e-89a2fb123dce"
    },
})

//Is authorized
export const authAPI = {
    
    me(){
        return instance.get(`/auth/me`)
        .then(response => {
            return response.data;
        })
    }

}

// GET users
export const usersAPI = { 

    getUsers(currentPage: number = 1, pageSize: number = 10) {
        //returning promise
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },

    getProfile(userId: number){
        //returning promise
        return instance.get(`profile/${userId}`)
        .then(response =>{
            return response.data
        })
    },


    // Folow Unfollow
    follow(userId: number){
        //returning promise
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data;
        });    
    },  

    unfollow(userId: number){
        //returning promise
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        });    
    },


}


// // Follow Unfollow
// export const followUnfollowAPI = {

//     follow(userId: number){
//         //returning promise
//         return instance.post(`follow/${userId}`)
//         .then(response => {
//             return response.data;
//         });    
//     },  

//     unfollow(userId: number){
//         //returning promise
//         return instance.delete(`follow/${userId}`)
//         .then(response => {
//             return response.data;
//         });    
//     },
// }


