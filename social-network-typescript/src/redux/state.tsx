import { v1 } from 'uuid';

export type UserType = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
};
export type DialogsPageType = {
  users: UserType[];
  messages: MessageType[];
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
};

// State
let state: StateType = {
  //Dialogs Page
  dialogsPage: {
    users: [
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
    messages: [
      { id: v1(), messageText: 'First message for user with ID - 1' },
      { id: v1(), messageText: 'First message for user with ID - 1' },
      { id: v1(), messageText: 'First message for user with ID - 1' },
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
};

export default state;
