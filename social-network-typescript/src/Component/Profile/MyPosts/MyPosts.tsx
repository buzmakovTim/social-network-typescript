import React, { useRef } from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { PostPropsType } from './Post/Post';

type MyPostsPropsType = {
  posts: Array<PostPropsType>;
  addPost: (addMessage: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = ({ posts, addPost }) => {
  //
  //Creating array for Posts using MAP
  let _posts = posts.map((post: PostPropsType) => (
    <Post user={post.user} postText={post.postText} likes={post.likes} />
  ));

  //let newPostElement = useRef<HTMLTextAreaElement>(null);
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPostFunction = () => {
    if(newPostElement.current) {
      let text = newPostElement.current.value;
      addPost(text);
      newPostElement.current.value = '';
    }
  };

  return (
    <div>
      <textarea ref={newPostElement} className={c.inputArea}></textarea>
      <div>
        <button onClick={addPostFunction} className={c.addPostButton}>
          Add post
        </button>
      </div>

      <h3>My Posts</h3>

      <div>{_posts}</div>
    </div>
  );
};

export default MyPosts;
