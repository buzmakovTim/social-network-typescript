import React, { ChangeEvent, TextareaHTMLAttributes, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm, submit } from 'redux-form';
import { v1 } from 'uuid';
import { addPostAC, PostType } from '../../../redux/profilePage-reducer';
import { AppStateType } from '../../../redux/redux-store';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { PostPropsType } from './Post/Post';

// type MyPostsPropsType = {
//   posts: Array<PostPropsType>;
//   newPostText: string;
//   addPost: () => void;
//   //updateNewPostText: (newText: string) => void;
// };

const MyPostsContainer: React.FC<any> = (props: any) => {
  
  const posts = useSelector<AppStateType, Array<PostType>> (state => state.profilePage.posts)
  const dispatch = useDispatch()
  //
  //Creating array for Posts using MAP
  
  
  let _posts = posts.map((post: PostType) => (
    
    <Post key={post.id} postText={post.message} likes={post.likes} />
 
  ));


  let addPostFunction = (postText: any) => {
      // alert(postText.newPostText);
      dispatch(addPostAC(postText.newPostText));
  };

  // let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   updateNewPostText(e.currentTarget.value)
  // }

  return (
    <div>
      <h3>My Posts</h3>
      
      {/* Post text area */}
      <div>
        <NewPostReduxForm onSubmit={addPostFunction}/>
      </div>

      

      {/* All post to display */}
      <div>{_posts}</div>

    </div>
  );
};


const NewPostForm = (props: any) => {

  return (
      <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your message'}/>
        
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

const NewPostReduxForm = reduxForm({form: 'postForm'})(NewPostForm)

export default MyPostsContainer;
