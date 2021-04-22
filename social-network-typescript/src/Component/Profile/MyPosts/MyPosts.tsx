import React, { LegacyRef } from 'react';
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

  let newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef();
  const addPostFunction = () => {
    //let text = newPostElement.current.value;
    alert('Hello!')
  }

  return (
    <div>
      <textarea ref={newPostElement} className={c.inputArea}></textarea>
      <div>
        <button onClick={addPostFunction} className={c.addPostButton}>Add post</button>
      </div>

      <h3>My Posts</h3>

      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;
