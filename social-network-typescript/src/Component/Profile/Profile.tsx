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
  addPost: () => void;
  newPostText: string;
  updateNewPostText: (newPostText: string) => void;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo
        userLoggedIn={props.userLoggedIn}
        urlBackgroundImg={props.urlBackgroundImg}
      />

      <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
