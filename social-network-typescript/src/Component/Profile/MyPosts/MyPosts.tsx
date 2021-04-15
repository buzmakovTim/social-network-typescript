import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  posts: Array<PostPropsType>;
};

const MyPosts = (props: MyPostsPropsType) => {
  //
  //Creating array for Posts using MAP
  let posts = props.posts.map((post) => (
    <Post user={post.user} postText={post.postText} likes={post.likes} />
  ));

  return (
    <div>
      <textarea className={c.inputArea}></textarea>
      <div>
        <button className={c.addPostButton}>Add post</button>
      </div>

      <h3>My Posts</h3>

      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;
