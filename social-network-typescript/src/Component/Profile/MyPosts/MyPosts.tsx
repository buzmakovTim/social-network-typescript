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
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = ({ posts, newPostText, addPost, updateNewPostText }) => {
  //
  //Creating array for Posts using MAP
  let _posts = posts.map((post: PostPropsType) => (
    <Post key={v1()} user={post.user} postText={post.postText} likes={post.likes} />
  ));

  let addPostFunction = () => {
    addPost();
  };

  let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostText(e.currentTarget.value)
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
