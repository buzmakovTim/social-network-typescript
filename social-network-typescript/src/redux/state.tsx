import { addSyntheticTrailingComment } from 'typescript';
import { v1 } from 'uuid';
import dialogPageReducer, { sendMessageActionTypeAC, setUserIdForMessageAC, updateNewMessageTextActionTypeAC } from './dialogsPage-reducer';
import profilePageReducer, { addPostAC, changeNewTextActionTypeAC } from './profilePage-reducer';
import { followAC, setUsersAC, unfollowAC } from './usersPage-reducer';
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
  userId: string
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

// NEW TYPES
export type LocationType = {
  city: string
  country: string
}

export type UserTypeNEW = {
  id: number 
  followed: boolean
  fullName: string, 
  status: string, 
  location: LocationType
}

export type UsersPageType = {
  users: UserTypeNEW[];
}

export type RootStateType = {
  profilePage: UserProfilePageType;
  dialogsPage: DialogsPageType;
  friendsPageSideBar: UserType[];
  usersPage: UsersPageType;
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

// One way
//export type ActionsType = AddPostActionType | ChangeNewTextActionType
//
// or
export type ActionsType = ReturnType<typeof changeNewTextActionTypeAC> | 
                          ReturnType<typeof addPostAC> | 
                          ReturnType<typeof updateNewMessageTextActionTypeAC> |
                          ReturnType<typeof sendMessageActionTypeAC> |
                          ReturnType<typeof setUserIdForMessageAC> |
                          ReturnType<typeof followAC> |
                          ReturnType<typeof unfollowAC> |
                          ReturnType<typeof setUsersAC>
                           //| 
                          //ReturnType<typeof sendMessageActionTypeAC>



//
// STORE
//

// let store: StoreType = {

//       // State
//       _state : {
//       //Dialogs Page
//       dialogsPage: {
//         users: [
//           {
//             id: v1(),
//             avatarUrl:
//               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//             firstName: 'Ken',
//             lastName: 'Olegov',
//             messages: [
//               { id: v1(), messageText: 'First message for user Ken' },
//               { id: v1(), messageText: 'Second message for user Ken' },
//               { id: v1(), messageText: 'Third message for user Ken' },
//             ],
//           },
//           {
//             id: v1(),
//             avatarUrl:
//               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//             firstName: 'Oleg',
//             lastName: 'Tulin',
//             messages: [
//               { id: v1(), messageText: 'First message for user Oleg' },
//               { id: v1(), messageText: 'Second message for user Oleg' },
//               { id: v1(), messageText: 'Third message for user Oleg' },
//             ],
//           },
//           {
//             id: v1(),
//             avatarUrl:
//               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//             firstName: 'Kirill',
//             lastName: 'Goncharov',
//             messages: [
//               { id: v1(), messageText: 'First message for user Kirill' },
//               { id: v1(), messageText: 'Second message for user Kirill' },
//               { id: v1(), messageText: 'Third message for user Kirill' },
//             ],
//           },
//         ],
//         newMessageText: '',
//         userId: ''
//       },

//       //User Profile Page
//       profilePage: {
//         urlBackgroundImg:
//           'https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1',
//         userLoggedIn: {
//           id: v1(),
//           avatarUrl:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//           firstName: 'Tim',
//           lastName: 'Buzmakov',
//         },
//         posts: [
//           {
//             user: {
//               id: v1(),
//               avatarUrl:
//                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//               firstName: 'Vadik',
//               lastName: 'Huyadik',
//             },
//             postText: 'First post',
//             likes: 10,
//           },
//           {
//             user: {
//               id: v1(),
//               avatarUrl:
//                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//               firstName: 'Kiril',
//               lastName: 'Goncharov',
//             },
//             postText: 'First post',
//             likes: 3,
//           },
//           {
//             user: {
//               id: v1(),
//               avatarUrl:
//                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//               firstName: 'Dima',
//               lastName: 'Drochilov',
//             },
//             postText: 'First post',
//             likes: 6,
//           },
//         ],
//         newPostText: '',
//       },

//       //SideBarFriends
//       friendsPageSideBar: [
//         {
//           id: v1(),
//           avatarUrl:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//           firstName: 'Ken',
//           lastName: 'Olegov',
//         },
//         {
//           id: v1(),
//           avatarUrl:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//           firstName: 'Oleg',
//           lastName: 'Tulin',
//         },
//         {
//           id: v1(),
//           avatarUrl:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
//           firstName: 'Kirill',
//           lastName: 'Goncharov',
//         },
//       ],
//     },

//     _onChange() {
//       console.log('state changed')
//     },
//     subscribe(callback) {
//       this._onChange = callback
//     },
//     getState() {
//       return this._state
//     },

//     dispatch(action) {
      
//       this._state.profilePage = profilePageReducer(this._state.profilePage, action)
//       this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action)  

//       this._onChange() //
//     }

// }

//export default State;
//export default store;


