import React from 'react';
import { UserType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
  urlBackgroundImg: string;
  userLoggedIn: UserType;
  posts: Array<PostPropsType>;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo
        userLoggedIn={props.userLoggedIn}
        urlBackgroundImg={props.urlBackgroundImg}
      />

      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
