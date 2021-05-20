import React from 'react';
import { ActionsType, StoreType, UserType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

type ProfilePropsType = {
  //urlBackgroundImg: string;
  //userLoggedIn: UserType;
  store: StoreType;
};

//
// Comments Test2
//

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfoContainer  store={props.store}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;
