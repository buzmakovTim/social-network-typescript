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
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Preloader } from '../Common/Preloader/Preloader';
// import { withRouter } from 'react-router-dom';


class ProfileContainerComponent extends React.Component<PropsType> {

  componentDidMount() {

    // UserId we are getting from withRouter  Type PathParamsType 
    let userId = this.props.match.params.userId;
    
    // For now we gonna hard code userId if not logged in yet
    if(!userId) {
      userId = '2'
    }
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
type PathParamsType = {
  userId: string
}

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

export const ProfileContainer = connect(mapsStateProps, mapsDispatchProps)(withUrlDataContainerComponent)
