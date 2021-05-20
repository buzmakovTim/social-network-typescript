import React, { ChangeEvent, TextareaHTMLAttributes, useRef } from 'react';
import { v1 } from 'uuid';
import { addPostAC, changeNewTextActionTypeAC } from '../../../redux/profilePage-reducer';
import { ActionsType, StoreType } from '../../../redux/state';
import MyPosts from './MyPosts';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { PostPropsType } from './Post/Post';


type MyPostsContainerPropsType = {
  store: StoreType;
};

// MyPosts Container component
// Taking the store

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({ store }) => {

  // Add Post call back Handler
  let addPostHandler = () => {
    store.dispatch(addPostAC())
  };

  // Update New Post Text call back Handler
  let updateNewPostTextHandler = (newText: string) => {
    let action = changeNewTextActionTypeAC(newText) // creating action with action creator
    store.dispatch(action)
  }


  return (
      // Pure Component MyPosts
      // Nothing know about the store
      <MyPosts newPostText={store.getState().profilePage.newPostText} 
               posts={store.getState().profilePage.posts} 
               addPost={addPostHandler} 
               updateNewPostText={updateNewPostTextHandler}/>
      )
};

export default MyPostsContainer;
