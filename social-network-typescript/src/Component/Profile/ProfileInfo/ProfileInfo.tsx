import React from 'react';
import { UserType } from '../../../redux/state';
import c from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
  urlBackgroundImg: string;
  userLoggedIn: UserType;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <div className={c.profileInfo}>
      <div className={c.profileWallpaper}>
        <img src={props.urlBackgroundImg} alt="" />
      </div>

      <div className={c.profileAvatar}>
        <img src={props.userLoggedIn.avatarUrl} alt="" />
      </div>

      <div>
        <h2>
          {props.userLoggedIn.firstName} {props.userLoggedIn.lastName}
        </h2>
      </div>
    </div>
  );
};

export default ProfileInfo;
