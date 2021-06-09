import React from 'react';
import { ProfileType } from '../../../redux/profilePage-reducer';
import { UserType } from '../../../redux/state';
import { Preloader } from '../../Common/Preloader/Preloader';
import { ProfileInfoType } from '../ProfileContainer';
import c from './ProfileInfo.module.css';
import userIcon from '../../../images/userIcon.png'
import { Z_ASCII } from 'node:zlib';

type ProfileInfoPropsType = {
  profile: ProfileType | null;
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  
  if(!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={c.profileInfo}>
      

      <div className={c.profileHeader}>
        <img src={props.profile.photos?.large ? props.profile.photos?.large : userIcon} alt="" />
        
        <div>
        {/* Name */}
          <h2>{props.profile?.fullName}</h2>
          
          <div className={c.aboutMeTitle}>About Me</div>
          <div className={c.aboutMe}>{props.profile?.aboutMe}</div>

          {/* Links */}
          <div className={c.links}>
            <div>
              Links
            </div>
            

          </div>
        </div>
        
      </div>


      
    </div>
  );
};

export default ProfileInfo;
