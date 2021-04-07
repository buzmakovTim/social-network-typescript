import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  posts: Array<PostPropsType>;
};

const MyPosts = (props: MyPostsPropsType) => {
  return (
    <div>
      <textarea className={c.inputArea}></textarea>
      <div>
        <button className={c.inputArea}>Add post</button>
      </div>

      <h3>My Posts</h3>

      <div>
        {props.posts.map((p) => (
          <Post user={p.user} postText={p.postText} likes={p.likes} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
