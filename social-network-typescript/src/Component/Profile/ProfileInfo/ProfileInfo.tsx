import React from 'react';
import { ProfileType } from '../../../redux/profilePage-reducer';
import { UserType } from '../../../types/types'
import { Preloader } from '../../Common/Preloader/Preloader';
import c from './ProfileInfo.module.css';
import userIcon from '../../../images/userIcon.png'
import { Z_ASCII } from 'node:zlib';
import { useParams } from 'react-router';
import facebook from '../../../images/facebook.png'
import web from '../../../images/web.png'
import github from '../../../images/github.png'
import instagram from '../../../images/instagram.png'
import twitter from '../../../images/twitter.png'
import vk from '../../../images/vk.png'
import youtube from '../../../images/youtube.png'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { Redirect } from 'react-router-dom';

type ProfileInfoPropsType = {
  profile: ProfileType | null;
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  
  let isAuth = useSelector<AppStateType, boolean>( state => state.authorizing.isAuth)

  if(!props.profile) {
   
    // If not Logged in redirect to Login page
    if(!isAuth) return <Redirect to={'/login'} />
    return <Preloader />
  }
  
  
  


  return (
    <div className={c.profileInfo}>
      

      <div className={c.profileHeader}>
        <img src={props.profile.photos?.large ? props.profile.photos?.large : userIcon} alt="" />
        
        <div>
        {/* Name */}
          <h2>{props.profile?.fullName}</h2>
          
          {/* About Me */}
          <div className={c.aboutMeTitle}>About Me</div>
          <div className={c.aboutMe}>{props.profile?.aboutMe}</div>

          {/* Looking for Job */}
          <div className={c.aboutMeTitle}>Looking for job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
          <div className={c.aboutMe}>{props.profile?.lookingForAJobDescription}</div>

          {/* Links */}
          <div className={c.links}>
            {/* <div>
              Links
            </div> */}
            <div>
              {props.profile.contacts?.facebook ? <a href={props.profile.contacts.facebook} target="_blank"><img src={facebook}/></a> : null}
              {props.profile.contacts?.website ? <a href={props.profile.contacts.website} target="_blank"><img src={web}/></a> : null}
              {props.profile.contacts?.vk ? <a href={props.profile.contacts.vk} target="_blank"><img src={vk}/></a> : null}
              {props.profile.contacts?.twitter ? <a href={props.profile.contacts.twitter} target="_blank"><img src={twitter}/></a> : null}
              {props.profile.contacts?.instagram ? <a href={props.profile.contacts.instagram} target="_blank"><img src={instagram}/></a> : null}
              {props.profile.contacts?.youtube ? <a href={props.profile.contacts.youtube} target="_blank"><img src={youtube}/></a> : null}
              {props.profile.contacts?.github ? <a href={props.profile.contacts.github} target="_blank"><img src={github}/></a> : null}
              {props.profile.contacts?.mainLink ? <a href={props.profile.contacts.mainLink} target="_blank"><img src={web}/></a> : null}
            </div>

          </div>
        </div>
        
      </div>


      
    </div>
  );
};

export default ProfileInfo;
