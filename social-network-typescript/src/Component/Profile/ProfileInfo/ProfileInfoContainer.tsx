import React from 'react';
import { AppStateType } from '../../../redux/redux-store';
import { StoreType, UserType } from '../../../redux/state';
import ProfileInfo from './ProfileInfo';
import c from './ProfileInfo.module.css';
import {connect} from 'react-redux';

// type ProfileInfoContainerPropsType = {
//   store: StoreType;
// };

// const ProfileInfoContainer = (props: ProfileInfoContainerPropsType) => {
//   return (
//     <ProfileInfo
//         userLoggedIn={props.store.getState().profilePage.userLoggedIn}
//         urlBackgroundImg={props.store.getState().profilePage.urlBackgroundImg}
//       />
//   );
// };


let mapsStateProps = (state: AppStateType) => {
  return {
    userLoggedIn: state.profilePage.userLoggedIn,
    urlBackgroundImg: state.profilePage.urlBackgroundImg
  }
}

const ProfileInfoContainer = connect(mapsStateProps)(ProfileInfo)

export default ProfileInfoContainer;
