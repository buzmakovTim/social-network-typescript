import { initializeSuccess } from "../redux/app-reducer";
import { setUserData } from "../redux/auth-reducer";
import { sendMessageActionTypeAC, setUserIdForMessageAC } from "../redux/dialogsPage-reducer";
import { addPostAC, setStatus, setUserProfileAC } from "../redux/profilePage-reducer";
import {followSuccess, setCurrentPage, setToggleIsFetching, setToggleIsFollowingProgress, setTotalUsersCount, setUsers, unfollowSuccess } from "../redux/usersPage-reducer";


export type MessageType = {
  id: string;
  messageText: string;
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

export type ActionsType =   ReturnType<typeof addPostAC> |
                            ReturnType<typeof setUserProfileAC> |
                            ReturnType<typeof sendMessageActionTypeAC> |
                            ReturnType<typeof setUserIdForMessageAC> |
                            ReturnType<typeof followSuccess> |
                            ReturnType<typeof unfollowSuccess> |
                            ReturnType<typeof setUsers> |
                            ReturnType<typeof setCurrentPage> |
                            ReturnType<typeof setTotalUsersCount> |
                            ReturnType<typeof setToggleIsFetching> |
                            ReturnType<typeof setUserProfileAC> |
                            ReturnType<typeof setUserData> |
                            ReturnType<typeof setToggleIsFollowingProgress> |
                            ReturnType<typeof setStatus> |
                            ReturnType<typeof initializeSuccess> 