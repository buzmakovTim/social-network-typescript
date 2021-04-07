import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';




type ProfilePropsType = {
  posts: Array<PostPropsType>
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>

          <img src="https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1" alt=""/>
          <div className={c.posts}>

            <img src="https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg" alt=""/>
            
            <MyPosts posts={props.posts}/>
          
          </div>
      </div>
    )
}

export default Profile;