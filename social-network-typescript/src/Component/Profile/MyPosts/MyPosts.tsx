import React, { ChangeEvent, TextareaHTMLAttributes, useRef } from 'react';
import { v1 } from 'uuid';
import { addPostAC, changeNewTextActionTypeAC } from '../../../redux/profilePage-reducer';
import { ActionsType } from '../../../redux/state';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  posts: Array<PostPropsType>;
  newPostText: string;

  dispatch: (action: ActionsType) => void
};

const MyPosts: React.FC<MyPostsPropsType> = ({ posts, newPostText, dispatch }) => {
  //
  //Creating array for Posts using MAP
  let _posts = posts.map((post: PostPropsType) => (
    <Post key={v1()} user={post.user} postText={post.postText} likes={post.likes} />
  ));

  //let newPostElement = useRef<HTMLTextAreaElement>(null);
  //let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPostFunction = () => {
    
    //addPost();
    //dispatch({type: 'ADD-POST'})
    dispatch(addPostAC())

  };

  let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //updateNewPostText(e.currentTarget.value)
    let action = changeNewTextActionTypeAC(e.currentTarget.value) // creating action with action creator
    dispatch(action)
  }

  return (
    <div>
      <h3>My Posts</h3>
      <textarea onChange={e => onChange(e)} value={newPostText} className={c.inputArea}></textarea>
      <div>
        <button onClick={addPostFunction} className={c.addPostButton}>
          Add post
        </button>
      </div>

      

      <div>{_posts}</div>
    </div>
  );
};

export default MyPosts;
