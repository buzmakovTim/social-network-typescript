import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';

import ProfileContainer from './ProfileContainer';


const Profile = (props: any) => {

    return (
        <div>

            <ProfileContainer />
            <MyPostsContainer />

        </div>
    )
}

export default Profile;