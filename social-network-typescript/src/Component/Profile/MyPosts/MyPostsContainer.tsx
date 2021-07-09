import React, { ChangeEvent, TextareaHTMLAttributes, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm, submit } from 'redux-form';
import { v1 } from 'uuid';
import { addPostAC, PostType } from '../../../redux/profilePage-reducer';
import { AppStateType } from '../../../redux/redux-store';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import style from './MyPostsContainer.module.css'
import { maxLengthCreator, required } from '../../Common/Validator/validators';
import { TextArea } from '../../Common/FormsControl/FormsControl';


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


const maxLength = maxLengthCreator(10);
const NewPostForm = (props: any) => {

  return (
      <div>
             <form onSubmit={props.handleSubmit}>
              <Field component={TextArea} 
                     name={'newPostText'} 
                     placeholder={'Enter your message'}
                     validate={[required, maxLength]}
              />
              
              <div className={style.submitButton}>
                <button>Add post</button>
              </div>

            </form>
      </div>
      
  )
}

const NewPostReduxForm = reduxForm({form: 'postForm'})(NewPostForm)

export default MyPostsContainer;
