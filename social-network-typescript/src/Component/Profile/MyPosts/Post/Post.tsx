import React from 'react';
import { UserType } from '../../../../types/types';
import c from './Post.module.css';

export type PostPropsType = {
  user: UserType;
  postText: string;
  likes: number;
};

const Post = (props: PostPropsType) => {
  return (
    <div className={c.post}>
      <div className={c.avaAndUserName}>
        <img
          src="https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg"
          alt=""
        />

        <div>
          <div className={c.userName}>
            <span>
              {props.user.firstName} {props.user.lastName}
            </span>
          </div>
          <div>
            <span>{props.postText}</span>
          </div>
        </div>
      </div>

      <div>Likes {props.likes}</div>
      <div>
        <button>Like</button>
      </div>
    </div>
  );
};
export default Post;
