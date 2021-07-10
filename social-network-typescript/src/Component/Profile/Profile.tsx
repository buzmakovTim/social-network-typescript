import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

import ProfileContainer from './ProfileContainer';


const Profile = (props: any) => {

    const isAuth = useSelector<AppStateType, boolean>( state => state.authorizing.isAuth)

    return (
        <div>

            {isAuth && <ProfileContainer />}
            {isAuth && <MyPostsContainer />}
            {!isAuth && <Redirect to="/login" />}

        </div>
    )
}

export default Profile;