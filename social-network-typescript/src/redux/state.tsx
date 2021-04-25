import { v1 } from 'uuid';
import { rerenderEntireTree } from '../render';

export type UserType = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  messages?: MessageType[];
};
export type DialogsPageType = {
  users: UserType[];
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
};

export type StateType = {
  profilePage: UserProfilePageType;
  dialogsPage: DialogsPageType;
  friendsPageSideBar: UserType[];
};

// State
export let state: StateType = {
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
};

export let addPost = (postMessage: string) => {
  let newPost: PostsType = {
    user: state.profilePage.userLoggedIn,
    postText: postMessage,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
