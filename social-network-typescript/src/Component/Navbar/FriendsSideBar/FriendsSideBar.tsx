import React from 'react';
import { UserType } from '../../../types/types';
import c from './FriendsSideBar.module.css';

type FriendsSideBarPropsType = {
  friend: UserType;
};

export const FriendsSideBar: React.FC<FriendsSideBarPropsType> = ({
  friend,
}) => {
  return (
    <div className={c.friends}>
      <div>
        <img src={friend.avatarUrl} alt="" />
      </div>
      <div>{friend.firstName}</div>
      <div>{friend.lastName}</div>
    </div>
  );
};
