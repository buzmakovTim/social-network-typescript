import React from 'react';
import { ProfileType, setUserProfileAC } from '../../redux/profilePage-reducer';
import { AppStateType } from '../../redux/redux-store';
import { ActionsType, StoreType, UserType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';
import {Dispatch} from 'redux'
import {connect} from 'react-redux';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import axios from 'axios';


class ProfileContainerComponent extends React.Component<ProfileInfoType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                        this.props.setUserProfile(response.data)
            })
    
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
type MapStatePropsType = {
  profile: ProfileType | null
}
type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

let mapsStateProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile
  }
}
let mapsDispatchProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    setUserProfile: (profile: ProfileType) => {
      dispatch(setUserProfileAC(profile))
    }
  }
}
export type ProfileInfoType = MapStatePropsType & MapDispatchPropsType


// const Profile = () => {
//   return (
//     <div>
      
//       <MyPostsContainer />
//     </div>
//   );
// };

export const ProfileContainer = connect(mapsStateProps, mapsDispatchProps)(ProfileContainerComponent)
