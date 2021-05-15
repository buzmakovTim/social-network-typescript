import { addSyntheticTrailingComment } from 'typescript';
import { v1 } from 'uuid';
// import { rerenderEntireTree } from '../render';


export type AppPropsType = {
  state: RootStateType;
};


export type UserType = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  messages?: MessageType[];
};
export type DialogsPageType = {
  users: UserType[]
  newMessageText: string
};

export type MessageType = {
  id: string;
  messageText: string;
};

export type PostsType = {
  user: UserType;
  postText: string;
  likes: number;
};
export type UserProfilePageType = {
  urlBackgroundImg: string;
  userLoggedIn: UserType;
  posts: PostsType[];
  newPostText: string
};

export type RootStateType = {
  profilePage: UserProfilePageType;
  dialogsPage: DialogsPageType;
  friendsPageSideBar: UserType[];
};

export type StoreType = {
   _state: RootStateType
   _onChange: () => void

   subscribe: (callback: () => void) => void
   getState: () => RootStateType

   //updateNewPostText: (newPostText: string) => void
   //addPost: () => void

   dispatch: (action: ActionsType) => void
}

//
// Action Types start
//
//type AddPostActionType = ReturnType<typeof addPostAC>
//type ChangeNewTextActionType = ReturnType<typeof changeNewTextActionTypeAC>
//
// Action Types END
//

//
// CONST's
//

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';

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
export const updateNewMessageTextActionTypeAC = (newText: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
  }
}
export const sendMessageActionTypeAC = (newText: string) => {
  return {
    type: SEND_MESSAGE,
    newText: newText
  }
}

//
// Action Creators END
//

// One way
//export type ActionsType = AddPostActionType | ChangeNewTextActionType
//
// or
export type ActionsType = ReturnType<typeof changeNewTextActionTypeAC> | 
                          ReturnType<typeof addPostAC> | 
                          ReturnType<typeof updateNewMessageTextActionTypeAC> | 
                          ReturnType<typeof sendMessageActionTypeAC>
                           //| 
                          //ReturnType<typeof sendMessageActionTypeAC>



//
// STORE
//

let store: StoreType = {

      // State
      _state : {
      //Dialogs Page
      dialogsPage: {
        users: [
          {
            id: v1(),
            avatarUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
            firstName: 'Ken',
            lastName: 'Olegov',
            messages: [
              { id: v1(), messageText: 'First message for user Ken' },
              { id: v1(), messageText: 'Second message for user Ken' },
              { id: v1(), messageText: 'Third message for user Ken' },
            ],
          },
          {
            id: v1(),
            avatarUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
            firstName: 'Oleg',
            lastName: 'Tulin',
            messages: [
              { id: v1(), messageText: 'First message for user Oleg' },
              { id: v1(), messageText: 'Second message for user Oleg' },
              { id: v1(), messageText: 'Third message for user Oleg' },
            ],
          },
          {
            id: v1(),
            avatarUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
            firstName: 'Kirill',
            lastName: 'Goncharov',
            messages: [
              { id: v1(), messageText: 'First message for user Kirill' },
              { id: v1(), messageText: 'Second message for user Kirill' },
              { id: v1(), messageText: 'Third message for user Kirill' },
            ],
          },
        ],
        newMessageText: ''
      },

      //User Profile Page
      profilePage: {
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
      },

      //SideBarFriends
      friendsPageSideBar: [
        {
          id: v1(),
          avatarUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
          firstName: 'Ken',
          lastName: 'Olegov',
        },
        {
          id: v1(),
          avatarUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
          firstName: 'Oleg',
          lastName: 'Tulin',
        },
        {
          id: v1(),
          avatarUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
          firstName: 'Kirill',
          lastName: 'Goncharov',
        },
      ],
    },

    _onChange() {
      console.log('state changed')
    },
    subscribe(callback) {
      this._onChange = callback
    },
    getState() {
      return this._state
    },

    // updateNewPostText(newPostText: string){
    //   this._state.profilePage.newPostText = newPostText
    //   this._onChange()
    // },
    
    // addPost() {
    //   let newPost: PostsType = {
    //     user: this._state.profilePage.userLoggedIn,
    //     postText: this._state.profilePage.newPostText,
    //     likes: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = '';
    //   this._onChange()
    // },

    dispatch(action) { // {type: 'ADD-POST' | }
        
        if(action.type === ADD_POST){
              let newPost: PostsType = {
                user: this._state.profilePage.userLoggedIn,
                //postText: action.postText,
                postText: this._state.profilePage.newPostText, 
                likes: 0,
              };
              this._state.profilePage.posts.push(newPost);
              this._state.profilePage.newPostText = '';
              this._onChange()
        
            } else if (action.type === CHANGE_NEW_POST_TEXT) {
              this._state.profilePage.newPostText = action.newText
              this._onChange()

            } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
              this._state.dialogsPage.newMessageText = action.newText
              this._onChange()
        
            } else if (action.type === SEND_MESSAGE) {
              let test = action.newText
              this._onChange()
        }
    }

}

//export default State;
export default store;


