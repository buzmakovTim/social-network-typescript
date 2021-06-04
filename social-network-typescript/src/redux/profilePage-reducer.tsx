import React from 'react';
import { v1 } from 'uuid';
import { ActionsType, PostsType, UserProfilePageType } from './state';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

// Initial state for Dialog Page
let initialState = {
    urlBackgroundImg:
      'https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1',
    userLoggedIn: {
      id: v1(),
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
      firstName: 'Tim',
      lastName: 'Buzmakov',
    },
    posts: [
      {
        user: {
          id: v1(),
          avatarUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
          firstName: 'Vadik',
          lastName: 'Huyadik',
        },
        postText: 'First post',
        likes: 10,
      },
      {
        user: {
          id: v1(),
          avatarUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
          firstName: 'Kiril',
          lastName: 'Goncharov',
        },
        postText: 'First post',
        likes: 3,
      },
      {
        user: {
          id: v1(),
          avatarUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
          firstName: 'Dima',
          lastName: 'Drochilov',
        },
        postText: 'First post',
        likes: 6,
      },
    ],
    newPostText: '',
  }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState


const profilePageReducer = (state: UserProfilePageType = initialState, action: ActionsType): UserProfilePageType => {

    switch(action.type){

        case ADD_POST: {
          const stateCopy = {...state}
          let newPost: PostsType = {
              user: {...state.userLoggedIn},
              //postText: action.postText,
              postText: state.newPostText, 
              likes: 0,
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
          return stateCopy    
        }
            

        case CHANGE_NEW_POST_TEXT: {
          const stateCopy = {...state}
          stateCopy.newPostText = action.newText
          return stateCopy
        }
            
        
        default: 
              return state
    }
}

//
// Action Creators Start
//
export const addPostAC = () => {
    return { 
        type: ADD_POST
    } as const
  }
  export const changeNewTextActionTypeAC = (newText: string) => {
    return {
      type: CHANGE_NEW_POST_TEXT,
      newText: newText
    } as const
  }
//
// Action Creators End
//

export default profilePageReducer;