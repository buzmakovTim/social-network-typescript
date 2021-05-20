import React from 'react';
import { StoreType, UserType } from '../../../redux/state';
import ProfileInfo from './ProfileInfo';
import c from './ProfileInfo.module.css';

type ProfileInfoContainerPropsType = {
  store: StoreType;
};

const ProfileInfoContainer = (props: ProfileInfoContainerPropsType) => {
  return (
    <ProfileInfo
        userLoggedIn={props.store.getState().profilePage.userLoggedIn}
        urlBackgroundImg={props.store.getState().profilePage.urlBackgroundImg}
      />
  );
};

export default ProfileInfoContainer;
