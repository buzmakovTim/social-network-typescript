import React from 'react';
import { UserType } from '../../App';
import MyPosts from './MyPosts/MyPosts';
import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
  userLoggedIn: UserType;
  posts: Array<PostPropsType>;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo userLoggedIn={props.userLoggedIn} />

      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
