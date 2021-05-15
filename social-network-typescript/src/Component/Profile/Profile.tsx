import React from 'react';
import { ActionsType, UserType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
  urlBackgroundImg: string;
  userLoggedIn: UserType;
  posts: Array<PostPropsType>;
  //addPost: () => void;
  newPostText: string;
  //updateNewPostText: (newPostText: string) => void;
  
  dispatch: (action: ActionsType) => void
};

//
// Comments Test2
//

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo
        userLoggedIn={props.userLoggedIn}
        urlBackgroundImg={props.urlBackgroundImg}
      />

      <MyPosts posts={props.posts}
               newPostText={props.newPostText}
               dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
