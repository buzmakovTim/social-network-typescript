import React from 'react';
import { UserType } from '../../../redux/state';
import c from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
  userLoggedIn: UserType;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <div className={c.profileInfo}>
      <div className={c.profileWallpaper}>
        <img
          src="https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1"
          alt=""
        />
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
