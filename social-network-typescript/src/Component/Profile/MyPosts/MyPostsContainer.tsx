import React, { ChangeEvent, TextareaHTMLAttributes, useRef } from 'react';
import { v1 } from 'uuid';
import { addPostAC, changeNewTextActionTypeAC } from '../../../redux/profilePage-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { ActionsType, StoreType } from '../../../redux/state';
import MyPosts from './MyPosts';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { PostPropsType } from './Post/Post';
import {connect} from 'react-redux';


// type MyPostsContainerPropsType = {
//   store: StoreType;
// };

// // MyPosts Container component
// // Taking the store

// const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({ store }) => {

//   // Add Post call back Handler
//   let addPostHandler = () => {
//     store.dispatch(addPostAC())
//   };

//   // Update New Post Text call back Handler
//   let updateNewPostTextHandler = (newText: string) => {
//     let action = changeNewTextActionTypeAC(newText) // creating action with action creator
//     store.dispatch(action)
//   }


//   return (
//       // Pure Component MyPosts
//       // Nothing know about the store
//       <MyPosts newPostText={store.getState().profilePage.newPostText} 
//                posts={store.getState().profilePage.posts} 
//                addPost={addPostHandler} 
//                updateNewPostText={updateNewPostTextHandler}/>
//       )
// };

let mapsStateToProps = (state: AppStateType) => {
    return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts
    }
}

let mapsDispatchToProps = (dispatch: any) => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    updateNewPostText: (newTe) => {}
  }
}

const MyPostsContainer = connect(mapsStateToProps, mapsDispatchToProps)(MyPosts);
export default MyPostsContainer;
