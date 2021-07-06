import React from 'react';
import { getUserProfile, ProfileType } from '../../redux/profilePage-reducer';
import { AppStateType } from '../../redux/redux-store';
// import { ActionsType, StoreType, UserType } from '../../redux/state';
// import MyPosts from './MyPosts/MyPosts';
// import MyPostsContainer from './MyPosts/MyPostsContainer';
// import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';
import {Dispatch} from 'redux'
import {connect, useSelector} from 'react-redux';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Preloader } from '../Common/Preloader/Preloader';
import { authAPI, usersAPI } from '../../api/api';


class ProfileContainerComponent extends React.Component<PropsType> {

  

  componentDidMount() {
 
    authAPI.me().then(data => {
      this.props.getUserProfile(data.data.id)
      })  
    
  }

  componentDidUpdate() {
    // UserId we are getting from withRouter  Type PathParamsType 
    let userId = Number(this.props.match.params.userId);
    
    // By default we gonna show profile who is login
    if(!userId) {
      // If I'm authorized, show my profile, otherwise PRELOADER gonna run none stop!!! NEEDS TO BE FIXED!
      authAPI.me().then(data => {
          this.props.getUserProfile(data.data.id)
          })    
    } else {
        //Show profile that we clicked on
        this.props.getUserProfile(userId)
    }
  }

  // Render
  render() {
    
    return (
      <div>
         <ProfileInfo profile={this.props.profile}/>
      </div>
    )
  }
}

// Types
type PathParamsType = {
  userId: string
}

type MapStatePropsType = {
  profile: ProfileType | null
}
 type MapDispatchPropsType = {
  getUserProfile: (id: number) => void
 }

let mapsStateProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile
  }
}
// let mapsDispatchProps = (dispatch: Dispatch): MapDispatchPropsType => {
//   return {
//     setUserProfile: (profile: ProfileType) => {
//       dispatch(setUserProfileAC(profile))
//     }
//   }
// }
type ProfileInfoType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileInfoType
// const Profile = () => {
//   return (
//     <div>
      
//       <MyPostsContainer />
//     </div>
//   );
// };

let  withUrlDataContainerComponent = withRouter(ProfileContainerComponent);

export const ProfileContainer = connect(mapsStateProps, 
                                            {getUserProfile} // thunk
                                            )(withUrlDataContainerComponent)
