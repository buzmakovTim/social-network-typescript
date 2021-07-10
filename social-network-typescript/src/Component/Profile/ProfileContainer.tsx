import React from 'react';
import { getUserProfile, ProfileType, getStatus, updateStatus } from '../../redux/profilePage-reducer';
import { AppStateType } from '../../redux/redux-store';
// import { ActionsType, StoreType, UserType } from '../../redux/state';
// import MyPosts from './MyPosts/MyPosts';
// import MyPostsContainer from './MyPosts/MyPostsContainer';
// import { PostPropsType } from './MyPosts/Post/Post';
import c from './Profile.module.css';
import {compose, Dispatch} from 'redux'
import {connect, useSelector} from 'react-redux';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Preloader } from '../Common/Preloader/Preloader';
import { authAPI, usersAPI } from '../../api/api';
import withAuthRedirect from '../../hoc/withAuthRedirect';



class ProfileContainer extends React.Component<PropsType> {

  

  componentDidMount() {
 

      // UserId we are getting from withRouter  Type PathParamsType 
      let userId = Number(this.props.match.params.userId);

      if(!userId) {
        // If I'm authorized, show my profile, otherwise PRELOADER gonna run none stop!!! NEEDS TO BE FIXED!
        authAPI.me().then(data => {
            this.props.getUserProfile(data.data.id)
            this.props.getStatus(data.data.id)
            })    
      } else {
          //Show profile that we clicked on
          this.props.getUserProfile(userId)
          this.props.getStatus(userId)
          
      }
  }

  componentDidUpdate(prevProps: PropsType, prevStatus: AppStateType) {

    console.log('Did update called!!!!');
    
    if(prevProps.match.params.userId !== this.props.match.params.userId) {
        
      authAPI.me().then(data => {
        this.props.getUserProfile(data.data.id)
        this.props.getStatus(data.data.id)
        })  
    }
  }

  // Render
  render() {
    
    return (
      <div>
         <ProfileInfo profile={this.props.profile} 
                      status={this.props.status} 
                      statusUpdateCallBack={this.props.updateStatus}/>
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
  status: string | null
}
 type MapDispatchPropsType = {
  getUserProfile: (id: number) => void
  getStatus: (id: number) => void
  updateStatus: (status: string) => void
 }

let mapStateProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}


type ProfileInfoType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileInfoType


let  withUrlDataContainerComponent = withRouter(ProfileContainer);

export default  connect(mapStateProps, 
                                            {getUserProfile, getStatus, updateStatus} // thunk
                                            )(withUrlDataContainerComponent)
